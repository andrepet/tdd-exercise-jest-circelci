const functions = require("./functions");
/*
test("Adds 2 + 2 to equal 4", () => {
  expect(2 + 2).toBe(4);
});

test("Adds 0.1 + 0.2 to equal 0.3", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3, 8);
});

test("Compare two string literals", () => {
  expect("alfa beta gamma").toBe("alfa beta gamma");
});

test("Compare two string variables", () => {
  const s1 = "alfa beta gamma";
  const s2 = "alfa beta gamma";
  expect(s1).toBe(s2);
});

test("Compare two list contains same elements", () => {
  const l1 = ["a", "b", "c"];
  const l2 = ["a", "b", "c"];
  expect(l1).toEqual(l2);
});

test("Compare two objects contains same properties", () => {
  const obj1 = { name: "test", data: [1, 2, 3] };
  const obj2 = { name: "test", data: [1, 2, 3] };
  expect(obj1).toEqual(obj2);
});

describe("Describe #1", () => {
  let l1;
  beforeEach(() => (l1 = [1, 2, 3]));
  test("Multiply 2 * 3 to equal 6", () => {
    // console.log("test 1: ", l1);
    l1.push(4);
    expect(2 * 3).toBe(6);
  });
  test("Multiply 2 * 3 to not be equal 8", () => {
    // console.log("test 2: ", l1);
    expect(2 * 3).not.toBe(8);
  });
});

describe("Function emptyList", () => {
  test("does return an empty list", () => {
    expect(functions.emptyList()).toEqual([]);
  });
  test("does return a list of length 0", () => {
    expect(functions.emptyList()).toHaveLength(0);
  });
  test("does not return an empty string", () => {
    expect(functions.emptyList()).not.toEqual("");
  });
});

describe("Function totalProductCost", () => {
  test("does return 0 on an empty list", () => {
    expect(functions.totalProductCost([])).toBe(0);
  });
  test("does return 15 for a list with 1 item for 15 ", () => {
    let products = [{ name: "item 1", price: 15 }];
    expect(functions.totalProductCost(products)).toBe(15);
  });
  test("does return 55 for three items that cost 10, 15, and 30", () => {
    let products = [
      { name: "item 1", price: 10 },
      { name: "item 2", price: 15 },
      { name: "item 3", price: 30 }
    ];
    expect(functions.totalProductCost(products)).toBe(55);
  });
});

describe("Function addProduct", () => {
  test("adds 1 product to empty list", () => {
    const product = { name: "boll", price: 10 };
    expect(functions.addProduct([], product)).toEqual([product]);
    expect(functions.addProduct([], product)).toContainEqual(product);
  });
  test("adds 1 product to a list of 2 items", () => {
    const expectedProducts = [
      { name: "item 1", price: 1 },
      { name: "item 2", price: 2 },
      { name: "item 3", price: 3 }
    ];
    const products = [...expectedProducts];
    const product = products.pop();
    expect(functions.addProduct(products, product)).toEqual(expectedProducts);
    expect(functions.addProduct(products, product)).toHaveLength(3);
  });
});


describe("mock console.log()", () => {
  test("testing testShow", () => {
    console.log = jest.fn();
    functions.testShow();
    expect(console.log).toBeCalledWith("abcdefghij");
  });
  test("testing showProducts on empty list", () => {
    console.log = jest.fn();
    functions.showProducts([]);
    expect(console.log).toHaveBeenNthCalledWith(1, "----------------------");
    expect(console.log).toHaveBeenNthCalledWith(2, "----------------------");
  });
  test("testing showProducts with 1 item", () => {
    console.log = jest.fn();
    functions.showProducts([{ name: "A", price: 1 }]);
    expect(console.log).toHaveBeenNthCalledWith(1, "----------------------");
    expect(console.log).toHaveBeenNthCalledWith(2, "1: A, 1");
    expect(console.log).toHaveBeenNthCalledWith(3, "----------------------");
  });
});

describe("mock console.log()", () => {
  test("mock console.log()", () => {
    console.log = jest.fn();
    console.log("abcd");
    expect(console.log).toBeCalledWith("abcd");
  });
  test("calling console.log() 3 times", () => {
    console.log = jest.fn();
    console.log("a");
    console.log("b");
    console.log("c");
    expect(console.log).toHaveBeenNthCalledWith(1,"a");
    expect(console.log).toHaveBeenNthCalledWith(2,"b");
    expect(console.log).toHaveBeenNthCalledWith(3,"c");
  });
  test("testing showProducts on empty list", () => {
    console.log = jest.fn();
    functions.showProducts([]);
    expect(console.log).toHaveBeenNthCalledWith(1, "----------------------");
    expect(console.log).toHaveBeenNthCalledWith(2, "----------------------");
  });
});

*/
describe("mock readlineSync.question", () => {
  test("override parseInt to create fruitcakes", () => {
    parseInt = jest.fn(fruit => fruit + "kaka");
    const bananaCake = parseInt("banan");
    expect(bananaCake).toBe("banankaka");
  });

  test("input string '5'", () => {
    const readlineSync = require("readline-sync");
    readlineSync.question = jest.fn(x => x);
    const output = readlineSync.question("5");
    expect(output).toBe("5");
  });
  test("simulate user input as 'a', 'b', 'c'", () => {
    const readlineSync = require("readline-sync");
    readlineSync.question = jest.fn();
    // readlineSync.question.mockReturnValueOnce("a");
    // readlineSync.question.mockReturnValueOnce("b");
    // readlineSync.question.mockReturnValueOnce("c");
    /* man kan också kedja anropen */
    readlineSync.question
      .mockReturnValueOnce("a")
      .mockReturnValueOnce("b")
      .mockReturnValueOnce("c");
    const output = functions.testReadlineSync();
    expect(output).toBe("abc");
  });
  test("user inputs 'a','b' and 'c' and their sum is 'abc'", () => {
    const readlineSync = require("readline-sync");
    readlineSync.question = jest.fn();
    readlineSync.question.mockReturnValueOnce("a");
    readlineSync.question.mockReturnValueOnce("b");
    readlineSync.question.mockReturnValueOnce("c");
    const output1 = readlineSync.question();
    const output2 = readlineSync.question();
    const output3 = readlineSync.question();
    expect(output1 + output2 + output3).toBe("abc");
  });
});
/*
describe("mock jQuery Ajax", () => {
  // https://stackoverflow.com/questions/1801160/can-i-use-jquery-with-node-js
  // https://stackoverflow.com/questions/45068932/jsdom-env-not-working-on-node-js-c9/48561379#48561379
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const { window } = new JSDOM();
  const { document } = new JSDOM("").window;
  global.document = document;
  const $ = (jQuery = require("jquery")(window));

  test("return correct brewery data", () => {
    // $.get = jest.fn(() => {
    //   return new Promise((resolve) =>{
    //     resolve("hej");
    //   });
    // });
    // expect.assertions(1);
    expect(functions.callAjaxJQuery()).resolves.toEqual("hej");
  });
});

*/

// describe("mock fetch()", () => {
//   const fetch = require("node-fetch")
//   test(" function callFetch", () =>{
//     // console.log = jest.fn();
//     // functions.callFetch();
//     expect.assertions(1);
//     return expect(functions.callFetch()).resolves.toEqual([ { id: '1813', name: 'Beer Religion' } ]);
//   });
// });

describe("Function removeProduct", () => {
  let boll, spade, sten;
  let threeProducts, oneProduct;
  let firstElementIndex;
  beforeEach(()=>{
    boll = { name: "Boll", price: 50 };
    spade = { name: "Spade", price: 100 };
    sten = { name: "Sten", price: 1 }; 
    threeProducts = [ boll, spade, sten ];
    oneProduct = [ boll ];
    firstElementIndex = 0;
  });
  test("is implemented", () => {
    expect(functions.removeProduct).toBeDefined();
  });
  test("returns empty list when removing first product in list with 1 item", () => {
    expect(functions.removeProduct(oneProduct, firstElementIndex)).toEqual([]);
  });
  test("contains 2 items when removing first product in list with 3 items", () => {
    expect(functions.removeProduct(threeProducts, firstElementIndex)).toHaveLength(2);
  });
  test("removes 'Boll', contain 'Sten' and 'Spade'", () => {
    expect(functions.removeProduct(threeProducts, firstElementIndex)).toContainEqual(sten);
    expect(functions.removeProduct(threeProducts, firstElementIndex)).toContainEqual(spade);
  });
});
