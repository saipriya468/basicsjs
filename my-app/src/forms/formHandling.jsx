import React from "react";
class FormHandle extends React.Component{
         state={
             email:"",
             password:""
         }
        emailHandler=(event)=>{
            console.log(this.state.email);
             this.setState({ email:event.target.value});
        };
             pswHandler=(event)=>{
                console.log(this.state.password);
                 this.setState({password:event.target.value})
              
         };
         getDataHandler=(event)=>{
             console.log("email:",this.state.email,"password:",this.state.password)
                event.preventDefault()  
                

         }
    render(){
        return(
            <div>
                <form >
                    <label >email</label>
                    <input type="text" onChange={this.emailHandler} value={this.state.email}/>
                    <label >password</label>
                    <input type="text" onChange={this.pswHandler} value={this.state.password}/>
                   <input type="submit" onClick={this.getDataHandler}/>
                </form>
            </div>
        )
    }
}
export default FormHandle;