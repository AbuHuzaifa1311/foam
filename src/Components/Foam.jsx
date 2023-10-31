import React, { useState } from 'react'

 const Foam = () => {
    const [Username,setUsername] = useState("");
    const [Password,setPassword] = useState("");
    const [Email,setEmail] = useState("");
    const handleUsername = (e)=>{
        setUsername(e.target.value)
    };
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    };
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    };
    const handlesubmit = (e)=>{
        e.preventDefault()
        console.log(Username,Password,Email)
        setUsername('')
        setPassword('')
        setEmail('')
    }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" name='Username' value={Username} onChange={handleUsername} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" name='Password' value={Password} onChange={handlePassword} />
            </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text" name='Email' value={Email} onChange={handleEmail}/>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
};
export default Foam
