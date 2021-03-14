import React from "react";
import SecFun from "./secFun";
function PropsFunEx(props){
  var  emp={
        id:101,

    }
    return(
        <div>
    <h5>Iam props function</h5>
    <p>{props.one}</p>
    <SecFun six={emp.id}/>
        </div>
    )
}
export default PropsFunEx;