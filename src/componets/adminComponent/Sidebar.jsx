import Book from "../../assets/icons/bookIcon"
import Home from "../../assets/icons/homeIcon"
import Setting from "../../assets/icons/settingIcon"
import Logout from "../../assets/icons/logoutIcon"
import Word from "../../assets/icons/wordIcon"
import Chart from "../../assets/icons/chartIcon"
import Account from "../../assets/icons/accountIcon"
import image from "../../assets/images/potriate.png"
import "../adminComponent/stylesheets/sideBar.css"
import {useNavigate} from "react-router-dom"
// import {RiMenu3Line, RiCloseLine} from "react-icons/ri"

const Sidebar = ({active = "", text}) => {
  const navigate = useNavigate()
  const sideLinks = [
  {icon: <Home/>, text: "Dashboard", path: "/Dashboard" },
  {icon: <Word/>, text: "Words", path: "/Words"},
  {icon: <Home/>, text: "User Request", path: "/UserRequest"},
  {icon: <Chart/>, text: "Analytics", path: "/Analytics"},
  {icon: <Account/>, text: "Account", path: "/Account"},
  {icon: <Setting/>, text: "Setting", path: "/Setting"},
  {icon: <Logout/>, text: "Logout", path: "/LogOut"},
  ]
  return (
     <div className="side-parent">
    <div className="side-container"> 
      <div className="p-f">
        <div className="logo">
       <Book/>
       <h2>Tech-dictionary</h2>
        </div>
       <div className="po">
         <img src={image} alt="" />
         <h2>Jane Doe</h2>
         </div>
         <p>janedoe22@gmail.com</p>
      </div>
    <div className="links">
    {sideLinks.map((items, index) =>(<div className={`nav-links ${active === items.text && "active"}`} key ={index} onClick={()=> navigate(items.path)}>
             {items.icon}
          <p> {items.text}</p>
      </div>))}
    </div>
    </div>
    </div>
  )
}

export default Sidebar
