import Image from "../assets/icons/search.svg"
import Down from "../assets/icons/Down.svg"
import "../adminComponent/adminComCss/adminEdith.css"

const AdminEdit = ({text= "+ Add word" , type}) => {
  return (
   <div>
    {type ? <div>
      <div className="h1"><h1>Popular word list</h1></div>
    <div className="edith">
     <div className="text"><p>{text}</p></div>
      <div className="three-box">
        <div className="input">
          <input type="search" name= "search" placeholder="Search word"/>
          <div><img src={Image} alt="" /></div>
        </div>
           <div className="category"> <p>Category type</p><div><img src={Down} alt="" /></div></div>
           <div className="date"><p>Date</p>
           <div> <img src={Down} alt="" /></div>
           </div>
      </div>
    </div>
    </div> :
     <div>
     <div className="h1"><h1>Popular word list</h1></div>
   <div className="edith">
    <div className="update"><p>{text = "Update list"}</p></div>
     <div className="four-box">
         <div className="word"><p>word</p>
           <div> <img src={Down} alt="" /></div>
           </div>
           <div className="status"><p>status</p>
           <div> <img src={Down} alt="" /></div>
           </div>
          <div className="category"> <p>Category type</p><div><img src={Down} alt="" /></div></div>
          <div className="date"><p>Date</p>
          <div> <img src={Down} alt="" /></div>
          </div>
     </div>
   </div>
   </div> 
    }
   </div>
  

  )
}


export default AdminEdit
