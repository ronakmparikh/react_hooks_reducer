import React, { useEffect, useState } from 'react'




const useEffect2 = () => {

    const [widthCount,setWidthCount]= useState(window.screen.width)

    const actualWidth = () => setWidthCount(window.innerWidth)
    

    useEffect(() => {
        console.log("Add Event")
        window.addEventListener("resize",actualWidth);
        //use effect cleanup function is avaliable
        return () => {
            console.log("Remove Event")
            window.removeEventListener("resize",actualWidth)
        }
    })

    return(
        <div>
        <p>The actual size of wondow is </p>
        <h1> {`count is ${widthCount}`} </h1>
        </div>
    )

}

export default useEffect2