import db from "../connect.js"

export const getCategories = (req,res) =>{
    const q = 'select * from categories';
    db.query((q),(err,data)=>{
        if(err)  return res.status(400).json(err);

        

        return res.status(200).json(data);
    })
}