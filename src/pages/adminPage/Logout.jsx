import React from 'react'
import { Sidebar, AdminNav } from '../../componets/adminComponent'
import LogoutIcon from "../../assets/icons/logout2.svg"
import "../adminPage/adminStylesheets/logout.css"
import Layout from '../../componets/adminComponent/DashLayout/Layout'
import { useNavigate } from 'react-router-dom'

 const Logout = () => {
  const  navigate = useNavigate() 
  return (
      <div className="logout-con">
     <div className="contents">
    <div> <img src={LogoutIcon} alt="" /></div>
     <h1>Oh no! You are leaving...... </h1>
     <h1>Are you sure ?</h1>
     </div>
       <div className="buttons">
       <button onClick={() => navigate("/Dashboard")}>No, cancel request</button>
       <span><button>Yes, log me out</button></span>
       </div>
      </div>
  
  )
}
 export default Logout
