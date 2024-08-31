import db from '../connect.js';

export const getbestsellingproducts = (req,res) => {
    const q  = "SELECT products.id , products.productname , products.price  , categories.category , products.issale , products.image , productsale.oldprice, productsale.newprice FROM products join categories on products.categoryid = categories.id LEFT JOIN bestsellingproducts ON products.id = bestsellingproducts.productid left join productsale on products.id = productsale.productid WHERE bestsellingproducts.productid = products.id ";
    
    db.query ( q , (err , data) => {
        if(err) return res.status(400).json(err);
        return res.status(200).json(data);
    })
}
export const addinbestsellingproducts = (req,res) => {
    const q = 'insert into bestsellingproducts (productid) value (?)';
    db.query(q,[req.body.productid],(err,data)=>{
        if (err) return res.status(400).json(err);
        return res.status(200).json('added');
    })
}
export const removefrombestsellingproducts = (req,res) => {
    const q = 'delete from bestsellingproducts where productid = ?';
    db.query((q),req.params.id,(err,data)=>{
        if(err)  return res.status(400).json(err);

        return res.status(200).json("Deleted");
    })
}
export const notbestsellingproducts = (req,res)=>{
    const q = 'SELECT products.id , products.productname , products.price  , categories.category , products.issale FROM products join categories on products.categoryid = categories.id LEFT JOIN bestsellingproducts ON products.id = bestsellingproducts.productid where bestsellingproducts.productid is null';
    db.query(q,(err,data)=>{
        if(err)  return res.status(400).json(err);

        return res.status(200).json(data);
    })
}