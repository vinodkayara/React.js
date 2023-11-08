import React from 'react'

export default function ArrowFunction() {
    const handleclick=()=>{
        alert(10)
    }
  return (
    <div>
        <button onClick={()=>handleclick()}>click</button>
    </div>
  )
}
 