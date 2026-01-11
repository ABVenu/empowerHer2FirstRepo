console.log("Hello World...")
/// This is Browser's 
// localStorage.setItem("empher2", "sunday session")

// let data = localStorage.getItem("empher2");

// console.log("data from local storage", data)

import fs from "fs"

let readData = fs.readFileSync("data.txt", "utf-8")

console.log("Data from FS", readData)