import React from 'react'
import "./MainDash.css"
import Cards from './Cards'
import Table from './Table'


const MainDash = () => {
  return (
    <div className='MainDash'>
        <h1>Dashboard</h1>
        <Cards />
        <Table />
    </div>
  )
}

export default MainDash