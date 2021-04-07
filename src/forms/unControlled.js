import React,{useRef, useState} from "react"

const UnControlled = () => {

    // it like a useState only its preserve the value. NO Re-render
    //useRef we can use in uncontrolled form insted of useState

    const luckyname = useRef(null)
    const [show,setShow] = useState(false);

    const submitForm = (e)=>{ // e define because by default would be submit so we stop that one

        e.preventDefault()
        const name= luckyname.current.value

        name === ""? alert("please fill the data") :setShow(true)


    }


    return(
        <div>
        <form action="" onSubmit={submitForm}>
        <h1>Encontrolled function</h1>
                <div>
                    <label>Enter your Luckyname</label>
                    <input type="text" ref={luckyname}></input>
                </div>
        <button>Submit</button>
        </form>
        <p>{ show ? `${luckyname.current.value}` :""}</p> 
        </div>
    )

}
export default UnControlled