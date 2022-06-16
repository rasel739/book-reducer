let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reuslt = array.reduce((prev, curr) => {
  return prev + curr;
}, 0);

console.log(reuslt);

let array2 = [
  {
    name: "Mobile",
    price: 50,
  },
  {
    name: "leptop",
    price: 50,
  },
  {
    name: "watch",
    price: 50,
  },
  {
    name: "watch",
    price: 50,
  },
  {
    name: "watch",
    price: 50,
  },
  {
    name: "watch",
    price: 50,
  },
  {
    name: "watch",
    price: 50,
  },
];

let result2 = array2.reduce((prev, curr) => {
  return prev + curr.price;
}, 0);

console.log(result2);

let fullName = "Rasel Hossain";

console.log(fullName);

let previousName = "Naser Ahmed";

console.log(previousName);
