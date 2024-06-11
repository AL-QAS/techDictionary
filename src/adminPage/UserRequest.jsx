import React from 'react'
import { AdminEdit, AdminNav } from '../adminComponent'
import "../adminPage/adminPageCss/user.css"
import Layout from '../DashLayout/Layout'


const UserRequest = () => {
  return (
   <Layout active="User Request">
     <div className='user'>
      <AdminNav text='Words'/>
    </div>
    <div className="ad">
      <AdminEdit/>
    </div>
   </Layout>
  )
}

export default UserRequest
