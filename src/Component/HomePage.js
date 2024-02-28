
import React from 'react'
import './Login.css';
import image2 from './image2.png'
import { Link } from 'react-router-dom';
function HomePage() {



  return (
    <div>
<div className='navbar'>
<div className='logo'>
   

<div className='image'><img src={image2}></img> </div>
<div className='content'>Username</div>

</div>



<hr></hr>
<div className='menubar'>Home </div>
<div className='menubar'>About Us</div>
<div className='menubar'>Courses</div>
<div className='menubar'>Contact Us</div>

<div className='homebutton'>
<button className='btn1'> 
<Link style={{
  textDecoration:'none',
  color:'white',
}} to={'/login'}>Logout</Link> </button></div>

</div>
        

        
    </div>
  )
}

export default HomePage;

