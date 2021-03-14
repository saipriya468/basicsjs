import React from "react";
import PropsFunEx from "./Firstfun";
import HelloProps from "./SecClass";
class PropsEx extends React.Component{
    name="saipriya";
    emp={
        name:"priya",
        age:25,
        color:"blue"
    };
    details=[1,2,3,4];
    propmthod=()=>{
        console.log("iam a method")
    }

    render(){
        return(
            <div>
              <h1>Propsexample practice</h1>
              <PropsFunEx one={this.name}>fun to fun ex</PropsFunEx>
              <HelloProps two={this.emp.age} three={this.details[0]} four={this.propmthod()} />
            </div>
        )
    }
}
export default PropsEx;