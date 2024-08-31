import db from "../connect.js";

export const getProducts = (req, res) => {
    const q = 'SELECT products.id, products.productname, products.image, products.price, products.issale, categories.category, productsale.oldprice, productsale.newprice FROM products JOIN categories ON products.categoryid = categories.id LEFT JOIN productsale ON products.id = productsale.productid';
    db.query(q, (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json(data);
    });
};

export const addProduct = (req, res) => {
    const q = "INSERT INTO products (productname, price, categoryid, image, isSale) VALUES (?)";
    const values = [
        req.body.productname,
        req.body.price,
        req.body.categoryid,
        req.body.image,
        req.body.isSale
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json("Successful");
    });
};

export const updateproduct = async (req, res) => {
    const connection = db; // Use the connection directly

    try {
        await connection.beginTransaction();

        if (req.body.productname !== "") {
            const q = `UPDATE products SET productname = ? WHERE id = ?`;
            const values = [req.body.productname, req.body.productid];
            await connection.query(q, values);
        }

        if (req.body.price !== "") {
            const q = `UPDATE products SET price = ? WHERE id = ?`;
            const values = [req.body.price, req.body.productid];
            await connection.query(q, values);
        }

        if (req.body.categoryid !== '') {
            const q = `UPDATE products SET categoryid = ? WHERE id = ?`;
            const values = [req.body.categoryid, req.body.productid];
            await connection.query(q, values);
        }

        if (req.body.image) {
            const q = `UPDATE products SET image = ? WHERE id = ?`;
            const values = [req.body.image, req.body.productid];
            await connection.query(q, values);
        }

        await connection.commit();
        return res.status(200).json({ success: true, message: 'Updated' });
    } catch (error) {
        await connection.rollback();
        console.error(error);
        return res.status(400).json({ success: false, message: 'Update failed', error: error.message });
    } finally {
        // Do not release the connection as it's a single connection
    }
};
