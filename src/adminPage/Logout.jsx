import React from 'react'
import { Sidebar, AdminNav } from '../adminComponent'
import "../adminPage/adminPageCss/logout.css"
import Layout from '../DashLayout/Layout'

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
