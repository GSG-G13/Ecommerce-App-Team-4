const searchFromArray = require('./main');

const productArr = [
  { name: 'Product A', price: 10 },
  { name: 'Product B', price: 20 },
  { name: 'Product C', price: 30 },
];

test('searchFromArray should return the correct product when given a valid search key', () => {
  const searchKey = 'Product B';
  const expectedProduct = { name: 'Product B', price: 20 };
  const actualProduct = searchFromArray(searchKey, productArr);
  expect(actualProduct).toEqual(expectedProduct);
});

test('searchFromArray should return null when given an invalid search key', () => {
  const searchKey = 'Product D';
  const expectedProduct = null;
  const actualProduct = searchFromArray(searchKey, productArr);
  expect(actualProduct).toEqual(expectedProduct);
});