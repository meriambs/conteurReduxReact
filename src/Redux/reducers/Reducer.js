
const initstate ={
 state :0 , 
}


const reducer =(state = initstate.state , action )=>{
switch(action.type){
    case "deposit":
        return state + action.payload;
        case "withdrowM":
            return state - action.payload;
         case "resete":
             return state = initstate.state;

            default : return state ;

}
}
export default reducer;