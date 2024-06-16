import React from 'react'
import { AdminEdit, AdminNav } from '../../componets/adminComponent'
import "../adminPage/adminStylesheets/user.css"
import Layout from '../../componets/adminComponent/DashLayout/Layout'


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
