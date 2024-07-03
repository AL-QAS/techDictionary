import React from 'react'
import LogoutIcon from "../../assets/icons/logout2.svg"
import "../adminPage/adminStylesheets/logout.css"
import { useNavigate } from 'react-router-dom'

 const Logout = ({view, handleClose}) => {
  return (
   <>
    {view ? (
     <div className="logout-con">
     <div className="contents">

   <div className="subtext">
   <div> <img src={LogoutIcon} alt="" /></div>
     <h1>Oh no! You are leaving...... </h1>
     <h1>Are you sure ?</h1>
   </div>
   <div className="buttons">
       <button onClick={handleClose}>No, cancel request</button>
       <span><button>Yes, log me out</button></span>
       </div>

     </div>
     
      </div>
    ) : null}
   </>
  )
}
 export default Logout
