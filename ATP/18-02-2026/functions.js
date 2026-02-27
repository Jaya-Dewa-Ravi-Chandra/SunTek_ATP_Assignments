/*
 a function can be stored in a variable
 a function can return another function
 a function can receive a function as arg
*/
let test=function(){
    return function sample(){
        return "function as return type"
    }
}
console.log(test())
/*output:[Function (anonymous)]
  with name:[Function: sample]
*/
//function returning another function
let game=function(name){
    return function (level){
        console.log(`${name} you are at level ${level}`)
    }
}
let levels=game("ravi")
levels(2)
levels(3)
//function as argument
let demo=function(a){
    a('1')
}
let triangle=function(b)
     {for(let i=0;i<5;i++)
       console.log(b.repeat(i+1))
     }
demo(triangle)
//-------------------------------------
let i1;
//global scope
function i()
{
    let i2;
    //function scope
    if(true){
        let i3
        //block scope
    }
}
//veery javascript function has closure by default
//when a function returns another function CLOSURE property gets enabled
//where main function argument will be temporary available in the heap until the sub function is executed
//------------------------------------------------------------------------------------------------------------------------------
/*collections
  -arrays(pack of elements)
  -object(pack of properties)
  -array of objects
*/
let marks=[90,85,75,65]
//marks is reference of array not name of array
//index of array starts with 0 because it indicates relative distance from the beginning
for (x of marks)
  console.log(x)
for (c in marks)
    console.log(c)
//array of objects
let emp=[
    
    { id:108,name:"dewa"},
    { id:204,name:"ravi"},
    { id:306,name:"chandra"},
    { id:411,name:"jaya"}
]
for (let o in emp){
    console.log((o)+`) ${emp[o].name}'s id is ${emp[o].id} `)
}
//object and functions in object
let student={
    firstname:"Jaya",
    lastname:"Dewa",
    marks:[95,75,85,65],
    address:{
        city:"Hyderabad",
        locality:"ECIL"
    },
    getfullname:function(){return `${this.firstname +" "+this.lastname}`},
    getaveragemarks:function(){let sum=0;
                               for (let x of marks)
                                sum+=x
                               return sum/this.marks.length
                              }
}
console.log(student.getfullname())
console.log(student.getaveragemarks())
let array=[1,2,3,4,5]
array.push(6)//inserts at end
array.shift()//removes first elemnt and returns
array.unshift(0)//adds element at first place
array.pop()//removes the last element
console.log(array)
console.log(array.splice(0,0))
console.log(array)