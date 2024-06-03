import React from 'react'

import { useState,useEffect } from 'react'
const Feed = ({header}) => {
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
    <div>
      Feed
    </div>
  )
}

export default Feed
