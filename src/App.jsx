import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Updates from './Components/Dashboard/RightSide/Updates'
import Orders from './Components/Dashboard/Sidebar/Orders'


function App() {
  

  return (
    
      <BrowserRouter>
      <Routes>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/orders' element={<Orders />}></Route>
      </Routes>
      </BrowserRouter>
       
    
  )
}

export default App
