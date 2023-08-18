
const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

/*

Without the async and await keywords,
getBeans() will log '3. Great! I'm making 
[object Promise] beans for dinner tonight!'

*/