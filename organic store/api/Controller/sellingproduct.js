import db from '../connect.js';

export const getnonsellingproducts = (req,res) =>{
    const q = 'select products.id , products.productname , products.issale , products.price , categories.category from products     join categories on categories.id = products.categoryid  where isSale = 0';
    db.query(q,(err,data)=>{
        if(err) return res.status(400).json(err);
        return res.status(200).json(data);
    })    
}


const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if (err) {
                return reject(err);
            }
            else {
                if((result.message == '(Rows matched: 0  Changed: 0  Warnings: 0')){
                    return reject('error');
                }
                resolve(result);
            }
        });
    });
};

export const addinsellingproducts = async (req, res) => {
    const q1 = 'INSERT INTO productsale (productid, oldprice, newprice) VALUES (?, ?, ?)';
    const q2 = 'UPDATE products SET isSale = 1 WHERE id = ?';

    const { productid, oldprice, newprice } = req.body;

    try {
        // Start a transaction
        await query('START TRANSACTION');

        // Insert into productsale table
        await query(q1, [productid, oldprice, newprice]);

        // Update products table
        await query(q2, [productid]);

        // Commit the transaction
        await query('COMMIT');

        return res.status(200).json({ message: 'Product added to sale successfully.' });
    } catch (error) {
        // Rollback the transaction in case of error
        await query('ROLLBACK');
        return res.status(400).json(error);
    }
};
export const removefromsellingproducts = async(req,res) =>{
    const q1 = 'delete from productsale where productid = ?';
    const q2 = 'UPDATE products SET isSale = 0 WHERE id = ?'
    try{
        await query('START TRANSACTION');

        // Insert into productsale table
        await query(q1, req.params.productid);

        // Update products table
        await query(q2, req.params.productid);

        // Commit the transaction
        await query('COMMIT');

        return res.status(200).json({ message: 'Product deleted from sale successfully.' });
    }   
    catch(err){
        await query('ROLLBACK');
        return res.status(400).json(err);
    } 
}