// var myCars = [
//   {
//         "name": "Axio 2018 WXB",
//       "priceLakh":22.5
//   },
//   {
//         "name": "Premio 2015",
//       "priceLakh":26,
//   },
//   {
//         "name": "Rickshaw",
//       "priceLakh":0.5,
//   },
//   {
//         "name": "Civic 2019",
//       "priceLakh":34.5,
//   },
// ];

// const myCarsFilter = myCars.filter((curentValue, index) => {

//     return curentValue.priceLakh > 0.5;
// })

// var result = myCarsFilter.reduce((prev, cur) => {
//   return prev + cur.priceLakh;
// }, 0);

// var totalPrice = result

// console.log(totalPrice)

// var baseSKU = "kf1097";

// var variationOptions = [
//   {
//     name: "size",
//     options: [40, 41, 42, 43],
//   },
//   {
//     name: "color",
//     options: ["black", "brown", "chocolate", "orange"],
//   },
// ];

// const prepareCodes = () => {

//   const variationOptionsColor = variationOptions.splice(1)[0].options;
//   const variationOptionsSize = variationOptions.splice(0)[0].options;

//   const newArray = [];

//   for (var i = 0; i < variationOptionsColor.length; i++) {
//     const productCode = `${baseSKU}-${variationOptionsColor[0]}-${variationOptionsSize[i]}`;

//     newArray.push(productCode);
//   }

//   return newArray;
// };

// const productCodes = prepareCodes();

// console.log(productCodes);

function generateCourseList(subject) {
  var courseObject = {
    name: "course-name",
    code: "course-id",
  };

  var courseList = [];

  switch (subject) {
    case "nodejs":
      let nodejs1 = courseObject;
      nodejs1.name = "NodeJS Beginner";
      nodejs1.code = "N101";
      courseList.push(nodejs1);
      break;

    case "html":
      let html = courseObject;
      html.name = "HTML";
      html.code = "N101";
      courseList.push(html);
      break;

    default:
      courseList.error = "result not found.";
  }
  return courseList;
}

var myCourses = generateCourseList("nodejs");

console.log(myCourses);
