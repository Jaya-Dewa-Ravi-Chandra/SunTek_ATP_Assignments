//objects consist only instance variable not methods or static variables since they are same for all objects
//methods are called on the object not by or through
//in JS we can create objects without classes

//these are called object literals:
const test={
    data:10,
    getdata:function(){console.log(data)}
}
//classes in JS
class Employee{
  #sno;//private members cant be accesed outside the class
  #name;
  constructor(sno,name)
  {
    this.#sno=sno;
    this.#name=name;
  }
  getData()
  {
    return `${this.#sno}\n${this.#name}`;
  }
}

const a=new Employee(1,"dewa")
console.log(a.getData())

//rweusability can e implemented via two ways
//1.inheritance- is a relationship
class Vehicle{}
class Car extends Vehicle{}
//2.composition -has a relationship
class Engine{}
class Bike{
    constructor(){
    this.e=new Engine();}
}
//optional chaining
let person={
    name:"dewa",
    id:20
}
console.log(person.marks)//undefined(without error)
//console.log(person.marks.length)//cant access undefined properties error
console.log(person.marks?.lenghth)//undefined(if undefined wont access properties)
console.log(person.name?.marks??"marks not defined")//to give a statement 
                                                    //instead of just undefined(nullish)
//spread operator
//creating a copy of a object using '=' just creates another reference for same object
let b={id:123,name:"ravi"}
let copy={...b}
b.name="dewa"
console.log(b,'\n',copy)
//spread operator'...' can only make sahllow copy
                      //i.e it can only make copy of top level elements but not neste onjects
//for deep copy-> structuredClone()
let deep={
  a:123,
  b:"abc",
  code:{
    num:11,
    strcode:"xyz"
  }
}
let scopy={...deep}
let dcopy=structuredClone(deep)
deep.code.strcode="hello"
deep.a=100
console.log(deep)//original object
console.log(scopy)//shallow copy
console.log(dcopy)//deep copy
//array copy
let arr=[1,2,3]
let copy1=[...arr,2]
console.log(copy1)
let copy2=[...arr,b=2]
console.log(copy2)
let x=[1,2,3]
let y=[4,5,6]
let merge=[...x,...y]
console.log(merge)
//rest parameter (uses spread operator)
//to take n no.of parameters
function sumis(...a)//rest parameter must always be the last parameter
                    //since it can take any number of elemnts it will disregard the parameters after it
{
  return a.reduce((acc,ele)=>acc+=ele)
}
console.log(sumis(10,20,30,40,50))
//destructuring (unpacking)
arr=[1,2,3,4,5]
let [k,l,m]=arr
console.log(k,l,m)
let emp={id:10,name:"jai",address:{city:"hyderabad"}}
let {id,name,address:{city}}=emp//variables must be same as the keys
console.log(id,name,city)