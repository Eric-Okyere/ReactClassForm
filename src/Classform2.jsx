    import React, { Component } from 'react'

class Classform2 extends Component {

state = {
    firstname: "",
    Email: "",
    password: "",
}




    handleChange  =(event)=>{
        this.setState({
            firstname: event.target.value,
        });
    }

    handleChangeEmail =(event)=>{
        this.setState({
            Email: event.target.value,
        });
    }
    handleChangePassword =(event)=>{
        this.setState({
            password: event.target.value,
        });
    }

    handleSubmit =(event)=>{
        event.preventDefault();
         console.log({
            name: this.state.firstname,
            email: this.state.Email,
            pass: this.state.password
         })
    }

  render() {
    return (
        <div className='main'>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label> <br />
          <input onChange={this.handleChange} type="text" value={this.state.firstname}></input> <br />
          <label>Emain</label> <br />
<input onChange={this.handleChangeEmail} type="text" value={this.state.Email}></input> <br />

<label>Password</label> <br />
<input onChange={this.handleChangePassword} type="text" value={this.state.password}></input> <br />
          <button>Submit</button>
         
          </form>
          </div>
    )
  }
}
export default Classform2