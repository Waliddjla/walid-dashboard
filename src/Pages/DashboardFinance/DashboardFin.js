import React, {useState, useContext} from 'react'
import './DashboardFinance.css';
import Barchart from '../../Components/Sidebar/AllChart/Barchart';

export default function DashboardFin() {
  return (
    <div className='global-container'>

    <h1>Les résiltats de l'année: 2023</h1>
    <form>
      <label htmlFor="year">Choisissez une date</label>
      <select id="year">
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2021">2020</option>
      </select>
    </form>
    <div className="dashboard-container">
    <Barchart />
      
    </div>

      
    </div>
  )
}
