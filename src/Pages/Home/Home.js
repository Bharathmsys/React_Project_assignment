import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
   <Link  to = '/'><div className='nav-link'>
      <div className='Home'></div>
      <h5 className='title'>Home</h5>
    </div></Link>
  )
}

export default Home
