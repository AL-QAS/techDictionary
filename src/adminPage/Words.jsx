import React from 'react'
import { AdminEdit, AdminNav } from '../adminComponent'
import "../adminPage/adminPageCss/words.css"
import Layout from '../DashLayout/Layout'

const Words = () => {
  return (
   <Layout active="Words">
     <div className='words'>
      <AdminNav text='Words'/>
    </div>
    <div className="Ed">
      <AdminEdit type={true}/>
    </div>
   </Layout>
  )
}

export default Words
