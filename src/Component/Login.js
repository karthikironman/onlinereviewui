
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function LoginForm() {


  return (
    <div className='container'>
   <form>
    <h1>Login </h1>
<hr></hr>
    <div className='ui divider'></div>
    <div className='ui form'></div>

 <div className='field'>
    <div className='label'>
<label>Email:</label></div>
<div className='emailinput'>
<input type='text' name='email' placeholder='email' ></input>
</div>
    </div>

    <div className='field'>
        <div className='label'>
<label>Password:</label></div>
<div className='passwordinput'>
<input type='text' name='password' placeholder='password'  ></input>
</div>
    </div >

<div className='loginbutton'>


<button className='btn2'>
  <Link style={{
    textDecoration:'none',
  }} to={'/Home'}>Submit</Link></button>

</div>
   </form>
    </div>
  )
}

export default LoginForm;