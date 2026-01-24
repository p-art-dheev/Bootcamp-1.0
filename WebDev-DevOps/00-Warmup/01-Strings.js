//length
console.log("----------Length----------")
let a="Hello this is Pardheev!!"
console.log(a.length)

// indexOf()
// str.indexOf(searchValue, fromIndex?)
console.log("----------indexOf----------")
console.log(a.indexOf("Par"))
console.log(a.indexOf("P", 16))

// lastIndexOf()
// Last index of a substring
// Syntax: str.lastIndexOf(searchValue, fromIndex?)
console.log("----------lastIndexOf----------")
let str="Hellow orld :)"
console.log(str.lastIndexOf("l"))
console.log(str.lastIndexOf("o",10)) //looks for o before index 10

//slice()
// Extracts part of string
// str.slice(start, end?)
console.log("----------slice----------")

let slicestr = "this is the new string to be sliced!!"
console.log(slicestr.slice(3,10)) //from index 3 to 10, last index i.e 10 is now included


//replace()
// Replaces first match (use regex /g for all)
// str.replace(searchValue, newValue)
console.log("----------replace----------")
let replacestr = "Pardheev plays Valorant"
console.log(replacestr.replace("valorant", "BGMI"))// this is case sensitive

// split()
// Converts string → array
// str.split(separator, limit?)
console.log("----------split----------")
let splitstr = "Get out of my way"
console.log(splitstr.split(" ", 3)) // length of array will be 3, first 3 words
console.log(splitstr.split(" ",))


// trim()
// Removes spaces from start & end
console.log("----------trim----------")

let strtrim = "        this  is  the string to be trimmed"
console.log(strtrim.trim())


// toUpperCase
console.log("----------UPPER-CASE----------")
let strupper = "this is ThE the String for UppErCAse"
console.log(strupper.toUpperCase())


// toUpperCase
console.log("----------lower-case----------")
let strlower = "this is ThE the StrinG for LOWERCAse"
console.log(strlower.toLowerCase())