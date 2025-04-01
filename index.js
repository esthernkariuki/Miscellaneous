let myText = "Hello, Wolrd";
let modifiedMyText = myText.slice(0,7);
console.log({modifiedMyText})

let x = 20;
let y = x -= 3 ;
let z = y /= 2;
console.log({z})


let m = "50";
let n = Number(m);
let o = n + 20;
console.log({o})

let word = "Javascript"
let firstCharacter =word.charAt(0);
let lastCharacter = word.charAt(9);
let worda= word.indexOf("s")
console.log(firstCharacter);
console.log(lastCharacter);
console.log({worda});tomato

let text = "i love javascript"
let upperText = text.toUpperCase();
let lowerText = text.toLowerCase();
console.log(upperText);
console.log(lowerText);


let titleCaseEsther ="i love javascript"
.split(" ")
.map( esther => esther.charAt(0).toUpperCase()+ esther.slice(1).toLowerCase())
.join(" ");
console.log({titleCaseEsther})

let sentence = "Hello, world"
let sentence1 =sentence.replace("world","javascript")
console.log({sentence1})


let sentence3 = sentence.replace(/ /g,"")
console.log({sentence3})

let language = "Javascript"
let senctence = `Ny favorite programming language is ${language}`
console.log({senctence})

let str = "extravanganza"
console.log(str.length > 10?false:true)

let name = "esther";
let nameEsther = "nyambura";
let twoName = ("$name"+" "+ "$nameEsther")
console.log(twoName)


let fruits = ["apple", "mangos","oarnges","watermelons","pineapples"];
console.log(fruits[3])
console.log(fruits.push("potatoes"))
console.log(fruits.unshift("sweet"))
console.log(fruits)
console.log(fruits[1]=("arrowroot"))
console.log(fruits)
console.log(fruits.splice(2,4))
console.log(fruits.includes("watermelons"))
console.log(fruits.sort())
console.log(fruits)
console.log(fruits.push("waru","tomatoes","sinamon","cakes"))
console.log(fruits)
console.log(fruits.sort())
console.log(fruits.slice(2))
console.log(fruits.splice())

console.log(fruits.find("watermelons"):true,false )
var added = fruits.shift();
var newAdd = fruits.pop();
var newAdded = fruits.push("coconut");
var newAddedadded = fruits.unshift("yohgut")
console.log(added);
console.log(newAdd);
console.log(newAdded)
console.log(fruits.forEach(fruits.toUpperCase))

let beauty = "hello world"
let beat = beauty.split(" ")
console.log(beat)
let name2 = beat.map(item => item.charAt(0).toUpperCase()+item.slice(1))
console.log(name2)
let name3= name2.join(" ");
console.log({name3});

let arr1 = [3,7,34,90,12]
let arr2 = [true, "green", "where",12,56]
let arr3 = arr1.length -1
let arr4 = arr1.slice(-1)
console.log(arr4)

let arr6 = arr2.slice(-1)
console.log(arr6)
// let arr3 = arr1[4]


console.log(arr3)

// console.log(arr2[4])
myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join())

let arr9 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr9.sort())


//finding last element
arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]
arr9 =arr1[arr1.length-1]

console.log({arr9})
arr10 = arr2.at(-1)
console.log({arr10});
//change into a string
myPets = ["Cow", "Bird", "Snake", "Dog"];
modifiedMyPets = myPets.join(",");
console.log({modifiedMyPets});
//sorting
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr11 = arr3.sort();
console.log({arr11});
let arr12 = arr11.reverse();
console.log({arr12})

let arr15 = arr3.sort((a,b)=> a-b);
console.log({arr15});

let arr16 = arr3.sort((a,b) => b-a);
console.log({arr16});
//duplicates
let arr20 = ["boy", "man", "girl",  "school", "girl", "woman"];







// arr20.forEach((item) => {
//    if (!firstArr.includes(item)) {
//       firstArr.push(item)
//    }
//    else {duplicated.push(item);}
// });
// console.log({firstArr})
// console.log({duplicated});

 

let arr5 = ["the", "way", "x", 4];
let arr19 =["food"];
// if (arr5.includes(arr19)){
// console.log({arr19});
// }
// else {
// console.log("the search word was not found")}
let arr26 = arr5.includes(arr19)?arr6:"the search word was not found";
console.log(arr26)



let words="renniw";
let sortedWord= words.split("").sort().join(" ");
console.log({sortedWord});

//lengths
let fruitss =["orange","watermelon","guavas","banana","mangos","pineapples","passionfruit","redpassion","apple","kiwi"]
 fruitss.splice(5,5 ,"tomato")
console.log({fruitss})


//removing spaces








