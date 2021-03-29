import React, {useReducer}from "react";

const reducer = (state,action) => 
{
    if(action.type==="Increment")
    {
        return state +1
    }
    if(action.type==="Dcrement")
    {
        return state - 1
    }
    return state;

}

const UseReducer =()=>{

    const [state,dispatch]= useReducer(reducer,0)
    return(
        <div>
            <p>{state}</p>
            <button onClick={()=> dispatch({type:"Increment"})}>Inc</button>
            <button onClick={()=> dispatch({type:"Dcrement"})}>dec</button>
        </div>
    )
}

export default UseReducer