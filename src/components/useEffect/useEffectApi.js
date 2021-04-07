
import React, { useEffect, useState } from 'react'



const useEffectApi= () =>{

    const[users, setUsers]=useState([])

    const getUser=async ()=>{

        try // it is called Error Handling
        {
            const response= await fetch('https://jsonplaceholder.typicode.com/todos')
   
            setUsers(await response.json())

        }catch(error){

            alert("my error is " + error)

        }
    
       
    }

    useEffect(()=>{
        getUser()
    }, []) // [] this one is use for used only one time

    return(
        
       <div>
        <h1>List Api user</h1>
            <div className="user list">
            {
                    users.map((curElem)=>{

                        return(
                                <div>
                                <h1>{curElem.id} {curElem.title}</h1>
                                </div>
                        )

                    })

             }
             </div>
             </div>

        
        
    )

}

export default useEffectApi