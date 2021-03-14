import React from "react";
class HelloProps extends React.Component{
  render(){
    return(
        <div>
            <p>props secclass </p>
          <h4>{this.props.two}</h4>
          <h5>{this.props.three}</h5>
          <h6>{this.props.four}</h6>
        </div>
    )
}
}
export default HelloProps;