import React from 'react'
import { AdminNav } from '../adminComponent'
import "../adminPage/adminPageCss/setting.css"
import Layout from '../DashLayout/Layout'

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