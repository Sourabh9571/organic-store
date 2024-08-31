import db from "../connect.js";

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const registercontroller = (req ,res ) =>{
    const q = 'select * from users where username = ?';
    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(404).json("username taken by other");
        
        const salt = bcrypt.genSaltSync(10);
        const hashpass = bcrypt.hashSync(req.body.password,salt);

        if(req.body.status === 'admin'){
            const values = [
                req.body.username,
                req.body.email,
                hashpass ,
                req.body.status
            ]
            const q = "insert into users (`username`,`email`,`password`,`status`) values(?)"
            db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("admin user has been created");
            })
        }
        else {

        const values = [
            req.body.username,
            req.body.email,
            hashpass
        ]
        const q = "insert into users (`username`,`email`,`password`) values(?)"
        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("user has been created");
        }) }
    })
}
export const logincontroller = (req, res) => {
    const q = 'SELECT * FROM users WHERE username = ?';
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not exists");

        const checkpass = bcrypt.compareSync(req.body.password, data[0].password);
        if (!checkpass) return res.status(400).json("Wrong password");

        if(req.body.status === 'admin' && data[0].status === 'admin'){
            const token = jwt.sign({
                id: data[0].id,
                isAdmin: req.body.status === 'admin' && data[0].status === 'admin' // Check if user is admin
            }, "screatekey");
    
            const { password, ...others } = data[0];
    
            res.cookie("accesstoken", token, {
                httpOnly: true,
            }).status(200).json({ ...others, isAdmin: req.body.status === 'admin' && data[0].status === 'admin' });
        }
        else if(req.body.status === 'local'){
            const token = jwt.sign({
                id: data[0].id,
                isAdmin: req.body.status === 'admin' && data[0].status === 'admin' // Check if user is admin
            }, "screatekey");
    
            const { password, ...others } = data[0];
    
            res.cookie("accesstoken", token, {
                httpOnly: true,
            }).status(200).json({ ...others, isAdmin: req.body.status === 'admin' && data[0].status === 'admin' });
        }
        else{
            res.status(400).json("You are not admin");
        }

        
    });
};

export const logoutcontroller = (req,res)=>{
    res.clearCookie("accesstoken",{
        secure:true,
        sameSite:"none"
    }).status(200).json("User has been logout");

}