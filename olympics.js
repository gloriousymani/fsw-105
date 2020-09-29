// 5 is greater than 3
if(5 > 3){
    console.log("It is greater")
} else {
    console.log("not greater")
}

// cat is the length 
var cat = "cat"
var dog = "dog"

if(cat.length == 3){
    console.log("is the length")
} else {
    console.log("is not length")
}



//cat is not equal to dog
if(cat == dog){
    console.log("not the same")
} else{
    console.log("the same")
}

//name of a person

var person = {
    name: "Bobby",
    age: 15
}


if( person.age >= 18){
    console.log(person.name + "is old enough")
} else{
    console.log(person.name + "is not old enough")
}


if(person.name.startsWith("B")){
    console.log(person.name + "allowed in movies")
}
else{
    console.log(person.name + "is not allowed in movies")
}

if(person.name.startsWith("B") && person.age >= 18){
    console.log(person.name + "allowed in movies")
} 
else{
    console.log(person.name + "is not allowed in movies")
} 

// 
if(1 === 1){
    console.log("strict")
}

else if(1 == 1) {
    console.log ("loose")
}
else {
    console.log ("not equal at all")
}

//

if(1 <= 2 && 2 == 4){
    console.log("yes")
}
else{
    console.log("no")
}
