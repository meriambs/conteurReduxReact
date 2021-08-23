import logo from './logo.svg';
import './App.css';
 import { useSelector, useDispatch} from "react-redux"
import Test from "./Test";

import {depositMoney, withdrowMoney,reseteMoney} from './Redux/Action';

function App() {
 const account = useSelector((state) => state.account);
 const dispatch = useDispatch();


  return (
    <div className="App">
     <Test/>

     <button onClick={()=>dispatch(depositMoney(10))} >Deposit</button>
     {account}
     <button onClick={()=>dispatch(reseteMoney())}>reset</button>
     <button  onClick={()=>dispatch(withdrowMoney(10))}>withdrow</button>
    </div>
  );
}

export default App;
