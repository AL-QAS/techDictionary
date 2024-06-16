import React from 'react'
import { Sidebar, AdminNav } from '../../componets/adminComponent'
import "../adminPage/adminStylesheets/logout.css"
import Layout from '../../componets/adminComponent/DashLayout/Layout'

 const Logout = () => {
  return (
    <Layout>
      <div>
        <AdminNav text='LogOut'/>
      </div>
    </Layout>
  )
}
 export default Logout
