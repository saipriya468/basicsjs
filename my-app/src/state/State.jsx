import React from "react";
class StateEx extends React.Component{
    state={
        name:"gnanesh dhathri"
    }
    onchangeHandler=()=>{
        this.setState({
            name:"saipriya",
        })
    }
    render(){
        return(
            <div>
                <h2>Hello:{this.state.name}</h2>
<button className="btn btn-primary" onClick={this.onchangeHandler}>ClickMe!</button>
            </div>
        )
    }
}
export default StateEx;