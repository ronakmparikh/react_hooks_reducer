import React, { useState } from 'react';

const UseStateArray = () => {

    const bioData = [
        {
            id:0,myname:"Ronak PArikh"
        },
        {
            id:1,myname:"pkdon"
        }
    ]
    const [myArray,setArray]= useState(bioData)
    const cleararray = () => {
        setArray([]);
    }

    return(
        <>
        {
         myArray.map((myarray) =>
            <h1>ID:{myarray.id} & name:{myarray.myname}</h1>)
        }
        <button onClick={cleararray}>Clear</button>
        </>
            
    )
    }

export default UseStateArray