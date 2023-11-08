import React from 'react'

export default function Spread() {
    const originalArray =[1,2,3];
    const originalArray2 =[4,5,6];
    const copyArray=[...originalArray,...originalArray2];
    console.log(copyArray);

    const obj1={a:1,b:2};
    const obj2={b:3,c:4};
    const mergedObj={...obj1,...obj2}
    console.log(mergedObj);

  return (
    <div>
        {copyArray} <br/>
        {mergedObj.a}
    </div>
  )
}
