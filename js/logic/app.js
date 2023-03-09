//return array of prouducts that price between (Price from, Price To)
function filterPrice(arr, priceFrom, priceTo) {
  let result = arr.filter((e) => e.price >= priceFrom && e.price <= priceTo);
  return result;
}

// filtering product according to spacific Category
function filterCat(str, arr) {
  let result = arr.filter((ele) => {
    return ele.category === str;
  });
  return result;
}
//search for product in array according to string value (arr, str)
function search(arr, str) {
  result = arr.filter((e) => {
    return e.name.includes(str);
  });
  return result;
}
module.exports = {
  filterCat,
  filterPrice,
  search,
};
