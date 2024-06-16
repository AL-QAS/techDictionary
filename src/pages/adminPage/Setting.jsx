import React from 'react'
import { AdminNav } from '../../componets/adminComponent'
import "../adminPage/adminStylesheets/setting.css"
import Layout from '../../componets/adminComponent/DashLayout/Layout'

const Setting = () => {
  return (
    <Layout active="Setting">
      <div className='Setting'>
      <AdminNav text='Setting'/>
    </div>
    </Layout>
  )
}

export default Setting