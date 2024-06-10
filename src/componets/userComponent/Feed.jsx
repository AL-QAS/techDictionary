import React from 'react'
import './feed.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Buttons from './Buttons'
import  Bookmark  from '../../assets/Bookmark.svg'

const Feed = ({header,subhead}) => {
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
    <div className='feed__container'>
      <div className='feed__header'>
    <h3 style={{fontSize:'24px',fontWeight:'bold',lineHeight:'28.8px'}}>{header}</h3>
      </div>
      <div className="feed__container-content-box">
      <div>
        <h4 className='subhead' style={{marginBottom:'10px'}}>{subhead}</h4>
    
{results.map((item,i)=>{
  return(
    <>
    <div>
      
    <div className="feed__container-content">
    <p key={i} className='feed__container-item' >{item}</p>
    <div className='main__feed-content_btn'>
               <button > <img src={Bookmark}/></button>
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
  )
}

export default Feed
