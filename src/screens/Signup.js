import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function () {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
    })
    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials")

    }

  }
  const onChange = (me) => {
    setcredentials({...credentials, [me.target.name]: me.target.value })

  }
  return (
    <>
      <div className='container'>


        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input type="text " className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword2" placeholder="Address" />

          </div>
          
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control"  name="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
         
          </div>
        
          
          
          

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
        </form>
      </div></>

  )
}
