import "../adminComponent/adminComCss/adminHeader.css"
import Files from "../assets/icons/files.svg"
import Pending from "../assets/icons/pending.svg"
import Book from "../assets/icons/Book.svg"
import Ana from "../assets/icons/ana.svg"
import Plus from "../assets/icons/plus.svg"
import Search from "../assets/icons/search.svg"
const AdminHeader = ({type}) => {
  return (
   <div>
    {type ? <div>
      <div className='Header'>
    <h4>Welcome back, jane</h4>
    <div className="Boxes">
      <div className="bx1">
     <div id="fil">
    <div> <img src={Files} alt="" /></div>
      <h1>Number of daily searches today
      <p>1,003</p>
      </h1>
     </div>
      </div>
      <div className="bx2">
      <div id="boo">
      <div> <img src={Book} alt="" /></div>
       <h1>Number of published words
       <p>45,397</p>
       </h1>
      </div>
      </div>
      <div className="bx3">
      <div id="pen">
     <div>  <img src={Pending} alt="" /></div>
       <h1>Number of pending words
       <p>500</p>
       </h1>
      </div>
      </div>
    </div>
    </div>
    </div> :
    <div>
       <div className='Header'>
    <h4>Good morning, jane</h4>
    <div className="Sec-boxes">
      <div className="bx4">
     <div id="sec1">
    <div> <img src={Files} alt="" /></div>
      <h1>Total number of words
      <p>500, 000</p>
      </h1>
     </div>
      </div>
      <div className="bx5">
      <div id="sec2">
      <div> <img src={Ana} alt="" /></div>
       <h1>Total number of unique visitors
       <p>10,000</p>
       </h1>
      </div>
      </div>
      <div className="bx6">
      <div id="sec3">
     <div>  <img src={Search} alt="" /></div>
       <h1>Total number of requests
       <p>15, 000</p>
       </h1>
      </div>
      </div>
      
      <div className="bx7">
      <div id="sec4">
     <div>  <img src={Plus} alt="" /></div>
       <h1>Total number of new additions
       <p>500, 000</p>
       </h1>
      </div>
      </div>

    </div>
    </div>
    </div>

    }
   </div>
  )
}

export default AdminHeader
