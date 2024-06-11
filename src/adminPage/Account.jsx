import React from 'react'
import {  AdminNav } from '../adminComponent'
import "../adminPage/adminPageCss/account.css"
import Layout from '../DashLayout/Layout'
import Potriate from "../assets/images/potriate.png"

const Account = ({text}) => {
  return (
   <Layout active="Account">
     <div className='account'>
      <AdminNav text='Account'/>
    </div>
    <div className="acc">
    <h1>Account information</h1>
      <div className="invite"><p>{text = "Invite"}</p></div>
    </div>
    <div className="signup">
      
      <div className="header">

        <div className="section1">
        <div className='con1'>
        <img src={Potriate} alt="" />
       <div className="txt">
       <h1>Jane Doe</h1>
        <p>Super Admin</p>
        <p>Lagos state, Nigeria</p>
       </div>
        </div>
      <div className="con2">
       <span><div><p>Edit</p></div></span>
        <div><p>Save</p></div>
      </div>
        </div>

      <div className="section2">

        <div className="name">

        <div className="name-1">
       <div><input type="text" placeholder='Jane' /></div>
      <div>  <input type="text" placeholder='Username' /></div>
       <div> <input type="number"  placeholder='Phone Number'/></div>
        </div>

        <div className="name-2">
        <div>  <input type="text"  placeholder='Doe'/></div>
        <div>  <input type="email"  placeholder='Email'/></div>
        </div>

        </div>

       <div className="address">

        <h1>Address</h1>
       <div className="label1">
      <div className="second">
      <div>
        <select>
                  <option className='hidd' value="" selected disabled hidden>Country</option>
                  <option value="nigeria">Nigeria</option>
                    <option value="united states">United States</option>
                     <option value="russia">Russia</option>
                   <option value="algeria">Algeria</option>
         </select>
      </div>

      <div>
        <select>
                  <option value=""selected disabled hidden>State</option>
                  <option value="Abuja">Abuja</option>
                    <option value="rivers state">Rivers</option>
                     <option value="lagos">Lagos</option>
                   <option value="Ogun">Ogun</option>
                   <option value="akwa ibom">Akwa Ibom</option>
                   <option value="cross river">Cross River</option>
         </select>
      </div>
      </div>
       
      <div className='third'>
        <select>
                  <option value=""selected disabled hidden>City</option>
                  <option value="Abuja">Abuja</option>
                    <option value="rivers state">Rivers</option>
                     <option value="lagos">Lagos</option>
                   <option value="Ogun">Ogun</option>
                   <option value="akwa ibom">Akwa Ibom</option>
                   <option value="cross river">Cross River</option>
         </select>
      </div>


       </div>
       </div>

      </div>
      
      </div>

    </div>
   </Layout>
  )
}

export default Account
