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
                const removeElement = (id) =>{
                    const myNewArray = myArray.filter((myarray) => {

                            return myarray.id === id
                    }  )
                    setArray(myNewArray)
                        
                }

    return(
        <>
        {
         myArray.map((myarray) =>{
             return(
            <h1>ID:{myarray.id} & name:{myarray.myname}
            <button onClick={ () => removeElement(myarray.id)}>Remove</button>
            </h1>
            
              ) }
            )
            
        }
        <button onClick={cleararray}>Clear</button>
        </>
            
    )
    }

export default UseStateArray