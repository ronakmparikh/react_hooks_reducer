import React, {useEffect, useState } from 'react'

const useEffect1 = ()=>{

    const [countn,setCountn] =useState(0);
    

        useEffect(()=>{
            if (countn >= 1)
            {
                document.title = `Chats (${countn})`
            }else{
                document.title = `Chats`
            }
          
        },  [countn]);

    return (
        <div>
            <h1>{countn}</h1>
            <button onClick={()=> setCountn(countn+1) }>
             Click</button>
        </div>
    )
}

export default useEffect1