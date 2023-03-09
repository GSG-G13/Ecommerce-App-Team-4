const { filterPrice, filterCat, search } = require("../logic/app");

describe("test price filter function", () => {
  test("test 1", () => {
    expect(
      filterPrice(
        [
          { name: "product1", price: 50 },
          { name: "product2", price: 70 },
          { name: "product3", price: 300 },
          { name: "product4", price: 400 },
        ],
        50,
        100
      )
    ).toEqual([
      { name: "product1", price: 50 },
      { name: "product2", price: 70 },
    ]);
  });
  test("test 2", () => {
    expect(
      filterPrice(
        [
          { name: "product1", price: 50 },
          { name: "product2", price: 70 },
          { name: "product3", price: 300 },
          { name: "product4", price: 400 },
          { name: "product5", price: 600 },
        ],
        300,
        1000
      )
    ).toEqual([
      { name: "product3", price: 300 },
      { name: "product4", price: 400 },
      { name: "product5", price: 600 },
    ]);
  });
});

describe("filterCat Function", () => {
  test("should return => mobile", () => {
    const actual = filterCat("mobile", [
      {
        id: 1,
        category: "mobile",
        price: "520",
      },
      {
        id: 2,
        category: "car",
        price: "20000",
      },
    ]);
    const expected = [
      {
        id: 1,
        category: "mobile",
        price: "520",
      },
    ];
    expect(actual).toEqual(expected);
  });
});

//tests for search functionality

describe("Search function Function", () => {
  test("test 1 for search", () => {
    expect(
      search(
        [
          {
            id: 1,
            name: "mobile",
            price: "520",
          },
          {
            id: 2,
            name: "car",
            price: "20000",
          },
          {
            id: 3,
            name: "mobilaa",
            price: "3000",
          },
        ],
        "mob"
      )
    ).toEqual([
      {
        id: 1,
        name: "mobile",
        price: "520",
      },
      {
        id: 3,
        name: "mobilaa",
        price: "3000",
      },
    ]);
  });
});
