
import './App.css';
import React, { useState } from 'react';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseReducer from './components/UseReducer';
import{connect} from "react-redux";

function App(props) {
  
  // let newtime = new Date().toLocaleTimeString();
  // const [count, setcount] = useState(0);
  // const [time, settime] = useState(newtime);
  // const[name,setname]= useState('Ronak Parikh')

  // const inc = () => {
  //   setcount(count + 1)

  // }
  // const dec = () => {
  //   setcount(count - 1)
  // }

  // const samay = () => {
  //   let newtime = new Date().toLocaleTimeString();
  //   settime(newtime);
  // }

  // const change_name=() => {
  //   let val = name // if condition we can se that is called toggle so change the name with change of click event
  //   if(val === 'Ronak Parikh')
  //   {
  //     setname('Parikh Ronak')
  //   }
  //   else
  //   {
  //     setname('Ronak Parikh')
  //   }
  // }
  console.log(props)
  return (
    <div className="App">
      {/* <h1>{count}</h1>
      <h2>{time}</h2>
      <h3>{name}</h3>
      <button onClick={inc}>Click for Increament</button>
      <button onClick={dec}>Click for Dcreament</button>
      <button onClick={samay}>Click for Time</button>
      <button onClick={change_name}>Click for name</button> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject/> */}
      {/* <UseReducer/> */}
      <input name="username"></input>
    <h1>My name is {props.myname}</h1>
    <button onClick={()=>{props.changename()}}>change</button>
    </div>
  );
}
const mapStateToProp=(state)=>
{
  return {
    myname:state.username

  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    changename:(username)=>{
      dispatch({type:'CHANGE_NAME', payload:username})
        }
  }
 }

export default connect(mapStateToProp,mapDispatchToProps)(App);
