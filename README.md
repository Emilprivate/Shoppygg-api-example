# Shoppygg-api-example
I was building this custom Vercel app expanding on the capabilities of Shoppy.gg (an eCommerce website) by utilizing an API wrapper made by @datejer, until I realised that Sellix.io offered this + x10 features and full customization, so I no longer have use of this project.

## Features
- Automatically gathers all shoppygg products
- If products consist of more than one of the same product such as (Example - Monthy), (Example - Lifetime), they'll be added under the same 'card' with additional "Buy Buttons" that represent the price for each product. Watch the demo picture for further analysis.

## Demo
![Demo](https://github.com/Emilprivate/Shoppygg-api-example/blob/master/resources/demo.png)

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

## Known bugs
- If a product doesn't have an image (which you upload on shoppy.gg) then no products will display.

## Credits
- [Website Theme - Nyxiie](https://github.com/Nyxiie/account-template)
- [Shoppygg API Wrapper - Datejer](https://github.com/datejer/shoppy.gg)

## Disclaimer

This software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement.

In no event shall the author or copyright holder be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software.

This software is intended for educational and research purposes only. The author and copyright holder are not responsible for any illegal use of this software. All users are responsible for ensuring their use of this software complies with local, state, and federal laws and regulations.

