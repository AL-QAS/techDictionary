
import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { Header,Feed,Buttons } from '../../componets/userComponent'
import  Bookmark  from '../../assets/Bookmark.svg'
import  edit  from '../../assets/edit.svg'
import  darkbook  from '../../assets/darkbook.svg'

const HomePage = ({word}) => {
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
    path:'/SearchedWords',
    body:[
    {  subHeader:'Top 3 most searched words',
      content: results
    }
    ]
  },
  {
    header: 'Recent words',
    path:'/recentWords',
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
    <Link to='/login-page'><p className="moveToAdmin" style={{color:'#2E3192',
  fontWeight:'bold',
  display:'flex',
  justifyContent:'flexStart'
  }}>Go to Admin Page</p></Link>
  <Header/>
</div>

<div className="home__wordOfTheDay">
<span>{word}</span>
<h3>Word of the Day</h3>
</div>

<div className="section__padding  main__feed">
{headlines.map((item,i)=>{
  return(
    <>
    <div className="main__feed-box">
    <div   className="main__feed-container">
    <h3 key={i} className='main__feed-header'>{item.header}</h3>
    <button className="main__feed-btn" onClick={()=>navigate(item.path)}>See more</button>
    </div>

{item.body.map((lists,i)=>{
  return(
    <>
<div className="main__feed-content_box">
  <h4 key={i} style={{fontWeight:'bold'}}>{lists.subHeader}</h4>

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
<button onClick={()=>navigate('/changeWord')}><img src={edit}/></button>
   <Link to="/changeWord">Request Change to Word</Link>
</div>
<div>
<button onClick={()=>navigate('/newWord')}><img src={edit}/></button>
    <Link to="/newWord">Request New Word</Link>
</div>
<div>
<button onClick={()=>navigate('/bookmarks')} ><img src={darkbook}/></button>
        <Link to = "/bookmarks">Bookmarks</Link>
</div>

</div>
</div>
    </>
  )
}

export default HomePage
