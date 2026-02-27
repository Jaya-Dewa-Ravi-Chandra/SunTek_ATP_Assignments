let students=[
    {name:"ram",marks:90},
    {name:"dewa",marks:100},
    {name:"jai",marks:85},
    {name:"ravi",marks:95}
]
let a2=students.filter(obj=>obj.marks>90)
console.log(a2)

let a1=students.reduce((acc,stdobj)=>acc=acc+stdobj.marks,0)//third paramater initialixes 
                                                             // with 0 instead of object
                                                             //to counter NaN error
console.log(a1)
let data=students.map(stdobj=>stdobj)//to compile all objects and display
console.log(data)
let mod=students.map(stdobj=>{stdobj.marks-10; return stdobj})//to modify all objects
console.log(mod)