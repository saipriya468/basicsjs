import React from "react";
class EventBind extends React.Component{
    state={
        name:"guys",
    }
    btnHandler(value){
          this.setState({
             name: value,
          });
    };
    render(){
        return(
            <>
            <h1>hello:{this.state.name}</h1>
            <button className="btn btn-primary mr-4"onClick={this.btnHandler.bind(this,"goodmorning")} >GoodMorning</button>
            <button className="btn btn-success"  onClick={this.btnHandler.bind(this,"goodnight")}>GoodNight</button>
            </>
        )
    }
}
export default EventBind;