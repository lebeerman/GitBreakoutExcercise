var myArray = [
  ["apples", "bananas", "carrots"],
  ["lettuce", "rutebega"]
];

var myOtherArray = [];
// for (var i = 0; i < myArray.length; i++) {
//   myOtherArray[i].push([]);
//
//   for (var j = 0, myNestedArrayLength = myArray[i].length ; j < myNestedArray.length; j++) {
//     myOtherArray[i][m] = myArray[i][j] + "!";
//   }
//
// }


myArray.forEach( function(i, index){
  console.log("Outer: " + i + " || " + i[index]);
  myArray[index].forEach(function(j, index){
      console.log("Inner: " + myArray[index] + " || " + myArray[index] + '!');
      return myArray[index] + "!";
  });
  //
  // i[index].forEach(function(nestedI){
  //   console.log(i[index][nestedI]);
  //   i[index][nestedI] += '!';
  // });
});
console.log(myArray);
