import React from "react";
import { useState } from "react";
import Logout from "../../pages/adminPage/Logout";
import "../adminComponent/stylesheets/SideModal.css";
import { useNavigate } from "react-router-dom";

const modalLinks = [
  { text: "Dashboard", path: "/Dashboard" },
  { text: "Words", path: "/Words" },
  { text: "User Request", path: "/UserRequest" },
  { text: "Analytics", path: "/Analytics" },
  { text: "Account", path: "/Account" },
  { text: "Logout" },
];
const SideModal = ({ modal = "", view, onClose }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {view ? (
        <div className="side-modal scale-up-center">
          {modalLinks.map((items, index) => (
            <div
              className={`Modal-links ${modal === items.text && "modal"}`}
              key={index}
              onClick={
                items.text === "Logout"
                  ? handleOpen
                  : () => navigate(items.path)
              }
            >
              <p> {items.text}</p>
            </div>
          ))}
        </div>
      ) : null}
      <Logout view={open} handleClose={handleClose} />
    </>
  );
};
export default SideModal;
