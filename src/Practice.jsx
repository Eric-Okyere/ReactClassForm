import React, { Component } from 'react'

 class Practice extends Component {
state ={
    Name: "",
    Email: "",
    Password: "",
}

handleName =(event)=>{
      this.setState(
        {Name: event.target.value}
      );
}
handleEmail =(event)=>{
      this.setState(
        {Email: event.target.value}
      );
}
handlePassword =(event)=>{
      this.setState(
        {Password: event.target.value}
      );
}

handleSubmit=(event)=>{
    event.preventDefault();
    console.log(
        {
            Name: this.state.Name,
            Email: this.state.Email,
            Password: this.state.Pass       
        }
    )
    
}





  render() {
    return (
      <div className='main'>
      <form onSubmit={this.handleSubmit}>
      <label>Full Name</label> <br />
      <input onChange={this.handleName} type="test" value={this.state.Name}></input> <br />
      <label>Email</label> <br />
      <input onChange={this.handleEmail} type="test" value={this.state.Email}></input> <br />
      <label >Your password</label> <br />
      <input onChange={this.handlePassword} type="password" value={this.state.Password}></input> <br />
      <button >Submit</button>
      </form>
      
      
      </div>
    )
  }
}
export default Practice;
