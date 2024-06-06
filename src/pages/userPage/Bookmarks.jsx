import React from 'react'
import { Header,Feed,Buttons } from '../../componets/userComponent'
import { useState,useEffect } from 'react'
import axios from 'axios'
import  Frame  from '../../assets/Frame.svg'



const Bookmarks = () => {

  const [results,setResult] = useState([])

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


  return (
    <>
    <div className='section__padding' >
    <Header/>
  </div>

<div className="feed__container" style={{padding:'20px'}}>
<div>
<h4 className='subhead'>Bookmarks</h4>
<div className="feed__container-content-box">
<div className="bookmark__noContent" style={{margin:'0 auto',display:'block'}}>
  <img src={Frame}/>
  <p>No word has been bookmarked yet</p>
</div>

    
    {results.map((item,i)=>{
      return(
        <>
        <div style={{display:'none'}}>
          
        <div className="feed__container-content" style={{margin:'10px'}}>
        <p key={i} className='feed__container-item' >{item}</p>
        <div className='main__feed-content_btn' >
                    <Buttons/>
                      </div>
        </div>
        </div>
        </>
      )
    })}
</div>
</div>
</div>
</>
  )
}

export default Bookmarks
