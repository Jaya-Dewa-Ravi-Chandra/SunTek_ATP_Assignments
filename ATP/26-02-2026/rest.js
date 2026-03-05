/*💡 Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter*/
function sumis(...a)

{
  return a.reduce((acc,ele)=>acc+=ele)
}
console.log(sumis(10,20,30,40,50))