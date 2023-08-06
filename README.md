# Shoppygg-API
I was building this custom Vercel app expanding on the capabilities of Shoppy.gg (an eCommerce website) by utilizing an API wrapper made by @datejer [repo here](https://github.com/datejer/shoppy.gg), until I realised that Sellix.io offered this + x10 features and full customization, so I no longer have use of this project.

## Features
- Automatically gathers all shoppygg products
- If products consist of more than one of the same product such as (Example - Monthy), (Example - Lifetime), they'll be added under the same 'card' with additional "Buy Buttons" that represent the price for each product. Watch the demo picture for further analysis.

## Demo
[!Alt](https://github.com/Emilprivate/Shoppygg-api-example/blob/master/resources/demo.png)

## Installation
```
npm install
```

## Usage
- Create a .env file
- Insert your SHOPPY_API_KEY

### Example *.env* file:
```
SHOPPY_API_KEY=yourkey
```

- You can also insert environment details on Vercel instead.
[Get Started With Vercel](https://vercel.com/docs/getting-started-with-vercel)

## Development
```
npm run dev
```
- Read /api/ folder to understand the utilization of the Shoppygg API wrapper
- Read the /public/script.js file to see how information is requested from the API
