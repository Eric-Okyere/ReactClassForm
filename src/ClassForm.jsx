import React from 'react'

const ClassForm = ()=> {
  const [pcount, setCount]=useState(0);
    
   
  const increament=()=>{
      setCount(pcount +1)
  }
 
 const decreament=()=>{
  setCount(pcount -1)
 }




  return (
    <div className='main'>
  <form>
    <label>Name</label> <br />
    <input></input> <br />

    <label>Emain</label> <br />
    <input></input> <br />

    <label>Password</label> <br />
    <input></input> <br />
    
    <button>Submit</button>
   
    </form> 
    </div>
  )
}

export default ClassForm