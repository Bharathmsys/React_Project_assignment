import React from 'react'
import { Link } from 'react-router-dom'
import './Cities.css'
const Cities = () => {
  return (
    <Link to='/Cities'><div className='nav-link'>
      <div className='Cities'></div>
      <h5 className='title'>Cities</h5>
    </div> </Link>
  )
}

export default Cities
