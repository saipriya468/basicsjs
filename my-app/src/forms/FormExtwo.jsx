import React from "react";
class FormExTwo extends React.Component{
    state={
        email:"",
        password:""
    }
    mailHandler=(event)=>{
        console.log(this.state.email)
        this.setState({
            email:event.target.value,
        })   
    }
    pswHandler=(event)=>{
        console.log(this.state.password)
        this.setState({
            password:event.target.value,
        })
    }
    getDataHandler=(event)=>{
        console.log(this.state.email,this.state.password)
        event.preventDefault();
    }
    render(){
        return(
            <div>
<form>
<div className="mb-3">
<label htmlFor="exampleemail" className="form-label" >email address</label>
<input type="text" id="exampleemail" onChange={this.mailHandler} value={this.state.value}/>
</div>
<div className="mb-3">
<label htmlFor="expsw" className="form-label" >password</label>
<input type="text" id="expsw" onChange={this.pswHandler} value={this.state.password}/>
</div>
<button type="submit" className="btn btn-primary" onClick={this.getDataHandler}>submit</button>
</form>
            </div>
        )
    }
}
export default FormExTwo;