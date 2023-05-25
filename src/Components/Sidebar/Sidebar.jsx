import React from 'react'
import logo from '../../imgs/logo.png'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <div className="Sidebar">
        {/* logo */}
        <div className="logo">
            <img src={logo} alt="logo" />
            Sh<span>o</span>ps
        </div>
    </div>
  )
}

export default Sidebar