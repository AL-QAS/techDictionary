import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header,Feed,Buttons } from '../../componets/userComponent'
import  Bookmark  from '../../assets/Bookmark.svg'
import  edit  from '../../assets/edit.svg'
import  darkbook  from '../../assets/darkbook.svg'

const HomePage = () => {
  const [results,setResult] = useState([])

  let navigate = useNavigate()

  const fetchData = () => {

    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        const result = response.data.map((q)=>{
          return q.word
        })
 
        setResult(result)
      })
  }

  useEffect(()=>{
    fetchData()
  },[])

const headlines = [
  {
    header: 'Searched words',
    body:[
    {  subHeader:'Top 3 most searched words',
      content: results
    }
    ]
  },
  {
    header: 'Recent words',
    body:[{
      subHeader:'Top 3 recently added',
      content: results
    }
  ]
  }
]

  return (
    <>
<div className='section__padding' >
  <Header/>
</div>

<div className="section__padding  main__feed">
{headlines.map((item,i)=>{
  return(
    <>
    <div className="main__feed-box">
    <div   className="main__feed-container">
    <h3 key={i} className='main__feed-header'>{item.header}</h3>
    <button className="main__feed-btn" onClick={()=>navigate('/SearchedWords')}>See more</button>
    </div>

{item.body.map((lists,i)=>{
  return(
    <>
<div className="main__feed-content_box">
  <h4 key={i}>{lists.subHeader}</h4>

  {lists.content.splice(0,3).map((item,i)=>{
    return(
      <>
      <div className="main__feed-content">
      <p key={i} className='main__feed-item' >{item}</p>
                  <div className='main__feed-content_btn'>
               <button > <img src={Bookmark}/></button>
                <Buttons/>
                  </div>
    </div>
      </>
    )
  })}

  </div>    
    </>
  )
})}
    </div>
    </>
  )
})}

<div className="main__feed-edit">
  <h4>Made for you</h4>
<div>
<button ><img src={edit}/></button>
   <p >Request Change to Word</p>
</div>
<div>
<button ><img src={edit}/></button>
    <p >Request New Word</p>
</div>
<div>
<button  ><img src={darkbook}/></button>
          <p >Bookmarks</p>
</div>

</div>
</div>
    </>
  )
}

export default HomePage