
// const iState={
//     name:"ronak",
//     wishes:['eat','code']
// }


const reducer = (state="",action) =>{
    if(action.type==="CHANGE_NAME"){
        return {
            username:action.payload
        }
    }
        return state;


}
export default reducer;