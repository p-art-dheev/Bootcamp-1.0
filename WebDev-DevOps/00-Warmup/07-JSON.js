let details = {
  name: "Pardheev",
  Age: 21,
  College: "Amrita",
  Course: "B.Tech AIE",
  Hobbies: ["Drawing", "Painting", "Reading"],
};

console.log(details.name);
console.log(details.Age);
console.log(details.College);
console.log(details.Hobbies);

// To send this data to somwhere, we have to convert this (object) into string, which can typically read by all the languages. (when passed as object, all the programming languages may not understand the onejcts)


// Object -> String 
// Strin -> Object

// JSON - Javs Script Object Notattion 

//  2 Functions
// JSON.parse & JSON.stringify

const json_details = JSON.stringify(details)
console.log(json_details)


const details_object = JSON.parse(json_details)
console.log(details_object)