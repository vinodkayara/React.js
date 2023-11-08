import React from 'react'

export default function Destructure() {
    const number=[1,2,3];



const [a,b,c]=number;
console.log(a);
console.log(b);
console.log(c);

function printName({firstName,lastName}) {
    var name=`${firstName} ${lastName}`;
    console.log(`${firstName} ${lastName}`);
    return name;
}
const persons={ firstName:"John",lastName:"Doe"};
printName(persons);

const person={ firstName:"John",lastName:"Doe"};
const {firstName,lastName}=person;

console.log(firstName);
console.log(lastName);

  return (
    <div>
        {a}<br/>
        {b}<br/>
        {c}<br/>

        {printName(persons)}

    </div>
  )
}
