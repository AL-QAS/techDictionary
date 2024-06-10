import React from 'react'
import {  AdminNav, AdminHeader, Table } from '../adminComponent'
import "../adminPage/adminPageCss/dashboard.css"
import Layout from '../DashLayout/Layout'


const Dashboard = () => {
  return (
   <>
    <Layout active="Dashboard">
      <div className='Dash'>
      <AdminNav/>
      <AdminHeader type={true}/>
    </div>
    <div className="Chart">
      <Chart/>
    </div>
    </Layout>
   </>
  )
}

export default Dashboard
