const express = require('express');
const Shoppy = require('shoppy.gg');
const app = express();

require('dotenv').config();

const apiKey = process.env.SHOPPY_API_KEY;
const port = process.env.PORT || 3000;

const API = new Shoppy.API(apiKey);

const cors = require('cors');

app.use(cors());

app.get('/api/products', (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
