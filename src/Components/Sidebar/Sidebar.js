import React from 'react'
import './Sidebar.css'
import iconDashboard from './analytics.svg'

import {Link} from 'react-router-dom'



export default function Sidebar() {
  return (
    <nav className='sidenav'>
    <img src={iconDashboard}  />
    <Link to='/'>FINANCES</Link>
    <Link to ='/DashboardEmp'>EMPLOIS</Link>
      
    </nav>
  )
}
