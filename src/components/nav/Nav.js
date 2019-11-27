import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

export default function Nav() {

  const navStyle = {
    color: 'white'
  }
  
  return (
    <div className='parent'>
      <nav className='nav'>
        <h3>Amsterdam-Bar</h3>
        <ul className='nav-links'>
          <Link style={navStyle} to='/items'>
            <li>Menu</li>
          </Link>
          <Link style={navStyle} to='/my-order'>
            <li>My Order</li>
          </Link>
          <Link style={navStyle} to='/my-order'>
            <li><i className="material-icons">shopping_cart</i></li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
