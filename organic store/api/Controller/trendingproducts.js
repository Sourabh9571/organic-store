import db from "../connect.js"

export const gettrendingproducts = (req,res) => {
    const q = 'SELECT p.id , p.productname , p.price , p.image , p.isSale , c.category     FROM products AS p   JOIN trendingproducts AS tp   ON p.id = tp.productid  Join categories as c  On  c.id = p.categoryid ';
    db.query((q),(err,data)=>{
        if(err)  return res.status(400).json(err);

        return res.status(200).json(data);
    })
}
export const removetrendingproducts = (req,res) => {
    const q = 'delete from trendingproducts where productid = ?';
    db.query((q),req.params.id,(err,data)=>{
        if(err)  return res.status(400).json(err);

        return res.status(200).json("Deleted");
    })
}
export const addtrendingproducts = (req,res) => {
    const q = 'insert into trendingproducts ( productid ) values ( ? ) ';
    const value = req.body.productid;
    db.query((q),[value],(err,data)=>{
        if(err)  return res.status(400).json(err);

        return res.status(200).json("Added");
    })
}
export const getnontrendingproducts = (req,res)=> {
    const q = 'SELECT products.* , categories.category FROM products join categories on products.categoryid = categories.id LEFT JOIN trendingproducts ON products.id = trendingproducts.productid     WHERE trendingproducts.productid IS NULL';
    db.query((q),(err,data)=>{
        if(err)  return res.status(400).json(err);

        return res.status(200).json(data);
    })
}