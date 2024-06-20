
import { AdminEdit, AdminNav,AdminFeed } from '../../componets/adminComponent'
import "../adminPage/adminStylesheets/words.css"
import Layout from '../../componets/adminComponent/DashLayout/Layout'

const Words = () => {
  return (
   <Layout active="Words">
     <div className='words'>
      <AdminNav text='Words'/>
    </div>
    <div className="Ed">
      <AdminEdit type={true}/>
    </div>
    <div className="feed">
      <AdminFeed/>
    </div>
   </Layout>
  )
}

export default Words
