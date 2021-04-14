import React from 'react';

import useSignUpForm from './CustomHooks';


const Signup = () => {
  const signup = () => {
    alert(`User Created! 
Name: ${inputs.firstName} ${inputs.lastName}
Email: ${inputs.email}`);
  }
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm({firstName: '', lastName: '', email: '', password1: '', password2: ''}, signup);
  return (
    <div className='sign-up'>
     
            <form onSubmit={handleSubmit} autoComplete="off">
            <div className="field">
                <label className="label has-text-centered">First Name </label>
                
                  <input className="input" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required /><br/>
            </div>
              <div className="field">
                <label className="label has-text-centered">Last Name  </label>
               
                  <input className="input" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required /><br/>
                
              </div>
              <div className="field">
                <label className="label has-text-centered">Email Address  </label>
                
                  <input className="input" type="email" name="email" onChange={handleInputChange} value={inputs.email} required /><br/>
               
              </div>
              <div className="field">
                <label className="label has-text-centered">Password  </label>
                
                  <input className="input" type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/><br/>
               
              </div>
              <div className="field">
                <label className="label has-text-centered">Re-enter Password  </label>
                
                  <input className="input" type="password" name="password2" onChange={handleInputChange} value={inputs.password2}/><br/>
              
              </div>
              <button className="button is-block is-fullwidth is-success" type="submit">Sign Up</button>
            </form>
            
            </div>
  )
}

export default Signup;