const readlineSync =
  typeof module === "object"
    ? require("readline-sync")
    : { question: message => prompt(message) };

function main() {
  let products = [
    { name: "Banan", price: 10 },
    { name: "Mango", price: 45 },
    { name: "Lök", price: 15 }
  ];

  console.log("Hej och välkommen till din inköpslista!");
  let loopMenu = true;
  do {
    console.log("1. Se nuvarande varor");
    console.log("2. Lägg till vara och pris");
    console.log("3. Ta bort vara (inte implementerad!)");
    console.log("4. Sök vara");
    console.log("5. Visa dyraste/billigaste vara (inte implementerad!)");
    console.log("6. Visa totalkostnad");
    console.log("7. Visa medelkostnaden per vara (inte implementerad!)");
    console.log("8. Töm listan");
    console.log("9. Avsluta");
    let choice = readlineSync.question("Mata in ditt val: ");

    switch (choice) {
      case "1":
        showProducts(products);
        break;
      case "2":
        updateProducts = menuAddProduct(products);
        products = [...updateProducts];
        break;
      case "3":
        updateProducts = menuRemoveProduct(products); // ej implementerad
        break;
      case "4":
        menuSearchProduct(products);
        break;
      case "5":
        menuExpensiveCheapProduct(products); // ej implementerad
        break;
      case "6":
        const totalCost = totalProductCost(products);
        console.log(totalCost);
        break;
      case "7":
        const averagePrice = averageProductPrice(products); // ej implementerad
        break;
      case "8":
        products = emptyList(); // testa
        console.log("Inköpslistan är nu tom!");
        break;
      case "9":
        loopMenu = false;
        break;
      default:
        console.log("Fel inmatning!");
    }
  } while (loopMenu);
  console.log("Hej då!");
}

function testShow() {
  console.log("abcdefghij");
}

function showProducts(products) {
  console.log("----------------------");
  for (const [index, product] of products.entries()) {
    console.log(`${index + 1}: ${product.name}, ${product.price}`);
  }
  console.log("----------------------");
}

function menuAddProduct(products) {
  const name = readlineSync.question("Mata in namnet på produkten: ");
  let priceAsString = readlineSync.question("Mata in priset på produkten: ");
  while (!isStringAValidPrice(priceAsString)) {
    priceAsString = readlineSync.question(
      "Felaktig form på priset!\nMata in pris igen: "
    );
  }
  const price = Number(priceAsString);
  const product = { name, price };
  const updateProducts = addProduct(products, product);

  return updateProducts;
}

function addProduct(products, product) {
  const updateProducts = [...products];
  updateProducts.push(product);
  return updateProducts;
}

function isStringAValidPrice(price) {
  if (typeof price !== "string") return false;
  if (price.length < 1) return false;
  let priceAsNumber = Number(price);
  if (isNaN(priceAsNumber)) return false;
  if (priceAsNumber < 0) return false;
  return true;
}

function menuRemoveProduct(products) {
  console.log("Funktionen är inte implementerad ännu :(");
  return [];
}

function menuSearchProduct(products) {
  const name = readlineSync.question("Mata in namnet på produkten: ");
  const filteredProducts = searchProduct(products, name);
  if (filteredProducts.length === 0)
    console.log(`Hittade inga matchningar på '${name}'`);
  else showProducts(filteredProducts);
}

function searchProduct(products, name) {
  const filteredProducts = products.filter(product => product.name === name);
  return filteredProducts;
}

function menuExpensiveCheapProduct(products) {
  console.log("Funktionen är inte implementerad ännu :(");
}

function totalProductCost(products) {
  let totalCost = 0;
  let index;
  let product;
  for (index = 0; index < products.length; index++) {
    product = products[index];
    totalCost += product.price;
  }
  return totalCost;
  /* Så här kan du lösa den med reduce
  const initialValue = 0;
  const reducer = (totalCostAccumulated, currentProduct) =>
    totalCostAccumulated + currentProduct.price;
  const totalCost = products.reduce(reducer, initialValue);
  return totalCost;
  */
}

function averageProductPrice(products) {
  console.log("Funktionen är inte implementerad ännu :(");
  return 0;
}

function emptyList() {
  return [];
}

function callFetch() {
  // npm install node-fetch --save
  const fetch = require("node-fetch")
  return fetch(
    "https://api.openbrewerydb.org/breweries/autocomplete?query=religion"
  ).then(response => {
    console.log(response);
    return response.json();
  });
}

async function callAjaxJQuery() {
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const { window } = new JSDOM();
  const { document } = new JSDOM("").window;
  global.document = document;
  const $ = (jQuery = require("jquery")(window));
  const json = await $.get(
    "https://api.openbrewerydb.org/breweries/autocomplete?query=religion"
  );
  await console.log(json);
  return json;
}

function testReadlineSync() {
  const output1 = readlineSync.question("valfritext 1: ");
  const output2 = readlineSync.question("valfritext 2: ");
  const output3 = readlineSync.question("valfritext 3: ");
  return output1 + output2 + output3;
}

function removeProduct(products, index) {
  const updateProducts = [...products];
  updateProducts.splice(index, 1);
  return updateProducts;
}

const functions = {
  testReadlineSync,
  showProducts,
  addProduct,
  totalProductCost,
  emptyList,
  removeProduct
};

if (typeof module === "object") {
  module.exports = functions;
}

//callFetch();
//callAjaxJQuery();
