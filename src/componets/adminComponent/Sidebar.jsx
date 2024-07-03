import Book from "../../assets/icons/bookIcon";
import Home from "../../assets/icons/homeIcon";
import Logout from "../../pages/adminPage/Logout";
import LogoutIcon from "../../assets/icons/logoutIcon";
import Word from "../../assets/icons/wordIcon";
import Chart from "../../assets/icons/chartIcon";
import Account from "../../assets/icons/accountIcon";
import image from "../../assets/images/potriate.png";
import "../adminComponent/stylesheets/sideBar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ active = "", text }) => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const handleOpen = () => {
    setView(true);
  };
  const handleClose = () => {
    setView(false);
  };
  const sideLinks = [
    { icon: <Home />, text: "Dashboard", path: "/Dashboard" },
    { icon: <Word />, text: "Words", path: "/Words" },
    { icon: <Home />, text: "User Request", path: "/UserRequest" },
    { icon: <Chart />, text: "Analytics", path: "/Analytics" },
    { icon: <Account />, text: "Account", path: "/Account" },
    { icon: <LogoutIcon />, text: "Logout" },
  ];
  return (
    <>
      <div className="side-parent">
        <div className="side-container">
          <div className="p-f">
            <div className="logo">
              <Book />
              <h2>Tech-dictionary</h2>
            </div>
            <div className="po">
              <img src={image} alt="" />
              <h2>Jane Doe</h2>
            </div>
            <p>janedoe22@gmail.com</p>
          </div>
          <div className="links">
            {sideLinks.map((items, index) => (
              <div
                className={`nav-links ${active === items.text && "active"}`}
                key={index}
                onClick={
                  items.text === "Logout"
                    ? handleOpen
                    : () => navigate(items.path)
                }
              >
                {items.icon}
                <p> {items.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Logout view={view} handleClose={handleClose} />
    </>
  );
};

export default Sidebar;
