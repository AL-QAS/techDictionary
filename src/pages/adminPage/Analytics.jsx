import { AdminHeader, AdminNav } from "../../componets/adminComponent"
import "../adminPage/adminStylesheets/analytics.css"
import Layout from "../../componets/adminComponent/DashLayout/Layout"
function  Analytics(){
    return(
      <Layout active="Analytics">
     <div className="analytics">
       <AdminNav text ="Analytics"/>
        </div>
        <div className="ana-dash">
       <AdminHeader/>
        </div>
        <div className="analytic-box">
          <div>
            
          </div>
        </div>
      </Layout>
    )
}

export default Analytics