//advance array operations
let person=[2,93,40,60,21,70,38]

//filters
//with for of control statement
let result=[]
for(let x of person)
{
    if(x>30)
    {
        result.push(x);
    }
}
console.log(result);
//with filter function ->filter(selection)
let elements=person.filter((x)=>x>30);//for arrow operator if no braces->no return needed
console.log(elements);
//elements between 40 and 80
let elems=person.filter((x)=>x>40 && x<80);
console.log(elems);
//modify data
//using map
let r1=person.map(element=>element>30);//works but returns boolean{because it doesnt take call back function} thus it is duty of filter
console.log(r1);
//add 10 to each element
let r2=person.map(element=>element+10);//works but duty of filter
console.log(r2);
let r3=person.map(element=>{
    if (element>50) {
            return element+10;
    }
    else
    {
        return element+50;
    }
}
);
console.log(r3);
//reduce function ,to reduce an iterable into one single value
let r4=person.reduce((accumulator,element)=>accumulator+element);
//                    02          93           95
//                    95          40           135
//                     ........and so on.
console.log(r4);
//find small and big element
let r5=person.reduce((accumulator,element)=>accumulator>element?accumulator:element);
let r6=person.reduce((accumulator,element)=>accumulator<element?accumulator:element);
console.log(r5,'\n',r6)
//find and find index
console.log(person.find(element=>element==108))
console.log(person.find(element=>element==2))
let r7=person.findIndex(index=>index==9)
let r8=person.findIndex(index=>index==93)
console.log(r7,"\n",r8)
//sort ->lexical analysis 
// i.e in 10 first char 1 and second char 0 first char will determine despite much smaller elements
//modifies original array
let ascending=person.sort((a,b)=>a-b)
console.log(ascending)
let descending=person.sort((a,b)=>b-a)
console.log(descending)
//to sorted to make a new array without modifying
let a=[9,6,2,4,1,5,3]
let b=a.toSorted()
console.log(b,"\n",a)