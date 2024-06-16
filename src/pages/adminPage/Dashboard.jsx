import React from 'react'
import {  AdminNav, AdminHeader, CardFeed } from '../../componets/adminComponent'
import "../adminPage/adminStylesheets/dashboard.css"
import Layout from '../../componets/adminComponent/DashLayout/Layout'


const Dashboard = () => {
  return (
   <>
    <Layout active="Dashboard">
      <div className='Dash'>
      <AdminNav/>
      <AdminHeader type={true}/>
    </div>
    <div className="Chart">
      <CardFeed/>
    </div>
    </Layout>
   </>
  )
}

export default Dashboard
