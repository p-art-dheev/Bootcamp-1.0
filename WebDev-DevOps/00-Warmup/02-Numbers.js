console.log("-----------------parseInt-----------------")
// parseInt()
// Converts a string to an integer

// Syntax: parseInt(string, radix?)
// string → value to convert

// radix (optional) → base (2–36)

let str = "3344.33 is a number"
console.log(parseInt(str)) //3344
console.log(parseInt("aie23344")) // NaN
console.log(parseInt("344.pxx")) // 344 
console.log(parseInt("110", 2)) // binary number, base

// parseFloat()
console.log("-----------------parseFloat-----------------")

// Converts a string to a floating-point number
// Syntax: parseFloat(string)

// string → value to convert

let strfloat = "ola34.0"
console.log(parseFloat(strfloat))
console.log(parseFloat("34.01")) //34.01
console.log(parseFloat("34.00000000000")) //34
console.log(parseFloat("34.t534")) //34
console.log(parseFloat("34.534")) //34.534
console.log(parseFloat("3.14px"));   // 3.14
