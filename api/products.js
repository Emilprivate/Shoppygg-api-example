const Shoppy = require('shoppy.gg');
require('dotenv').config();

const apiKey = process.env.SHOPPY_API_KEY;
const API = new Shoppy.API(apiKey);

module.exports = (req, res) => {
    API.getProducts()
        .catch(data => {
            if (Array.isArray(data)) {
                console.log('All products: ', data);
                res.json(data);
            } else {
                console.error('Error fetching all products:', data);
                res.status(500).json({ error: 'Failed to fetch products' });
            }
        });
};
