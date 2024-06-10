import { AdminHeader, AdminNav } from "../adminComponent"
import "../adminPage/adminPageCss/analytics.css"
import Layout from "../DashLayout/Layout"
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