import React, { useState } from 'react'
import './Sidebar.css'
import Logo from "../../Images/logo.png";
import { SidebarData } from '../../../Data/Data';
import {UilSignOutAlt} from "@iconscout/react-unicons"
import { Link } from 'react-router-dom';
SidebarData
const Sidebar = () => {

  const [selected, setSelected] = useState(0)


  return (
    <div className="Sidebar">
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                Gr<span>ee</span>n
            </span>
            </div>
            <div className="menu">
             {SidebarData.map((item, index)=>{
              return(
                <Link to={item.path} 
                className={selected===index?"menuItem active":"menuItem"}
                key={index}
                onClick={() => setSelected(index)}
                >
                  <item.icon />
                  <span>
                    {item.heading}
                  </span>
                </Link>
              )
             })}
              
             <div className="menuItem">
              <UilSignOutAlt/>
             </div>
             
            </div>
        
    </div>
  )
}

export default Sidebar