let cars=['TATA','indica','swift']
let otherCars=["BMW","Audi"]

//let otherCars=["BMW",...cars,"Audi"]
//function printAllCars(...a)
//{
  //  console.log(...a)
//}
//printAllCars(...cars)
//console.log(...cars,...otherCars)



var newCars = [...otherCars]
newCars.push('rangerover')
console.log('new cars ==>',newCars)
console.log("the other cars ==>",otherCars)