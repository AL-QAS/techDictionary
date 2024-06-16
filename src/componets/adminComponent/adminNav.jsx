import React from 'react'
import AdminHeader from "../adminComponent/AdminHeader"
import "../adminComponent/stylesheets/adminNav.css"
import Image from "../../assets/icons/search.svg"
import Noti from "../../assets/icons/notify.svg"
import Potraite from "../../assets/images/potriate.png"
import Down from "../../assets/icons/Down.svg"
import { useState, useEffect } from 'react'

 const AdminNav = ({text= "Dashboard"}) => {
    const  [Options, setOptions] = useState(false)

    useEffect(() => {
      if (Options) {
        setTimeout(() => setOptions(false), 5000);
      }
    }, [Options]);

    const handleIconClick = () => {
        setOptions(!Options)
    }
  
  return (
      <>
      <div className='navbar'>
      <h1>{text}</h1>
      <div className='search'>
        <input type="search" name = "search"  placeholder='Search anything'/>
      <div><img src={Image}/></div>
      </div>
     <div className="alert">
     <img src={Noti} />
     </div>
       <div className="all">
      <div className='pot'> <img src={Potraite} alt="" /></div>
       <p>Jane Doe</p>
      <div className="down">
        <img src={Down} alt="" onClick ={handleIconClick}  />
        {Options && (
            <div className="options">
                <p>Profile</p>
                <p>Settings</p>
            </div>
        )}
      </div>
       </div>
      </div>
      </>
  )
}
 export default AdminNav
