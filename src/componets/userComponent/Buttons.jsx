import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
const Buttons = () => {
  let navigate = useNavigate()
  
  return (
    <div>
      <button style={{backgroundColor:'#2E3192',
      width:'79px',
      height:'40px',
      cursor:'pointer',
      color:'#fff',
      borderRadius:'8px',
      display:'block'
      }} onClick={()=>navigate('/wordMeaning')}>Check</button>
    </div>
  )
}

export default Buttons
