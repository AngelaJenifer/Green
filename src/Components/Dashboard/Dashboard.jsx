import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import Sidebar from './Sidebar/Sidebar'
import MainDash from './MainDash/MainDash'
import RightSide from './RightSide/RightSide'

const Dashboard = () => {
  return (
    <div className='dashboard'>
     <div className="AppGlass">
      <Sidebar />
     <MainDash />
     <RightSide />
     </div>
    </div>
  )
}

export default Dashboard