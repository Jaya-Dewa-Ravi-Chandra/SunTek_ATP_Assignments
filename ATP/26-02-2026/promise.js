console.log("Bullet coming in 3 seconds")
let dodgeStatus=true
const obj=new Promise((fulfilled,rejected)=>{
                                             setTimeout(()=>{
                                                         if(dodgeStatus==true)
                                                            fulfilled("Bullet dodged")
                                                         else
                                                             rejected("You died")},3000
                                                       )
                                            }
                      )
obj
.then((msg)=>console.log(msg))
.catch((msg)=>console.log(msg))
fetch('https://jsonplaceholder.typicode.com/posts')//fetch is a built in function
.then(res=>res.json())//json function extracts information which also is another promise
   .then(data=>console.log(data))
   .catch(data=>console.log(data))
.catch(err=>console.log(err))