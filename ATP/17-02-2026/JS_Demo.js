//single line 
/*multi line
  multi line
  multi line */
//variable declaration
let a;
//Initialization
a=10;
//Both at a time
let b=10;
//--------------------------------------
let name="Dewa";
let arr=[10,"hetero",30];
let bool=true;
let object={
    Name:"Jai",
    Id:"3002"
}
console.log(`\na is ${a}\n${name}\n${arr}\n${bool}\n${JSON.stringify(object)}\n`)
//javascrpit present in browser and nodejs
//node js is not a programming language it is a runtime environment for executing javascript code outside the browser
//jre(java runtime environment) is a software that allows you to run java applications on your computer.
// it includes the java virtual machine (jvm), 
// which is responsible for executing java bytecode, 
// and a set of libraries and tools for developing and running java applications.
//  jre is required to run java applications, 
// but it does not include the tools needed for developing java applications, 
// such as the java compiler (javac). if you want to develop java applications, 
// you need to install the java development kit (jdk), which includes both the jre and the development tools
let c=10
c='fegrtnh'
c=true
c={}
console.log(c,typeof(c), typeof c)
//Javascript is a dynamically typed programming language unlike C whichis static
//memory storage:call stack memory or heap memory
/*primitive: int ,bool, float ....
  non primitive: array,object.....

  let a where a can be called name of a variable
  System obj=new System() but here obj is not name of object
                                   obj contains reference of the object
                                   object stored in heap and memory address/reference to object is stored in heap
  
   
   declarations are done during compiling
   initialization during execution line by line
*/
var o;// old version 1995(not recommended)
let n;//new version 2015
/*
    = ->assignment
    == -> comparison(only values not datatypes)
    === -> (strict equal to) strict comparison
*/
function sum(a,b)
{
  return a+b
}
let g=function()
{
  return 100
}

console.log(sum(1,2),g())