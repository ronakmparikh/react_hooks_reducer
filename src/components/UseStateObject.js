import React, { useState } from 'react';

const UseStateObject = () => {
    const[myobject,setobject]=useState({name:"ronak",myage:29})

    const changeobject = () =>{

        setobject({...myobject, name:"Ronak PArikh"})
    }

    return(
        <div>
            <h1>Name:{myobject.name} & age: {myobject.myage}</h1>
            <button onClick={changeobject}>update</button>
        </div>

    )
}

export default UseStateObject