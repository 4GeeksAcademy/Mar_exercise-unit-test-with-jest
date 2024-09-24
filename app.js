// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


function fromDollarToYen (dollar) {
   return dollar*143
}
function fromEuroToDollar (euro) {
  return euro*1.07
}
function fromYenToPound (yen){
  return yen*0.0052
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };