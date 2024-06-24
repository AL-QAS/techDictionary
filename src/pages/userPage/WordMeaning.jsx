import React from 'react'
import { Header,Feed,Buttons } from '../../componets/userComponent'
import  bookmark3  from '../../assets/bookmark3.svg'
import  sound  from '../../assets/sound.svg'
const WordMeaning = ({word}) => {
  return (
    <>
     <div className='section__padding' >
  <Header/>
</div>

<div className="feed__container">
<div className="WOD" style={{display:'flex',flexDirection:'column',paddingBottom:'20px',marginLeft:'80px'}}>
  <p style={{color:'#2E3192',fontSize:'20px',fontWeight:'bold'}}>{word} </p>
  <span style={{color:'#8F8F8F',fontWeight:'bold'}}>Word of the day</span>
  <span style={{color:'#8F8F8F'}}>dd/m/y</span>
</div>
<div className='feed__flex'>
<div className="feed__word" style={{marginLeft:'40px',
  display:'flex',
  flexDirection:'column'}}>
 <p style={{fontSize:'24px',
  fontWeight:'bold',
  lineHeight:'29.05px'
 }}>Word</p>
  <span style={{color:'#8F8F8F'}}>noun</span>
</div>

<div className="feed__btn" style={{backgroundColor:'#fff',display:'flex',borderRadius:'6px'}}>
<button  style={{backgroundColor:'transparent',border:'none',outline:'none',cursor:'pointer'}}><img src={sound} alt="sound" /></button>
<button style={{backgroundColor:'transparent',border:'none',outline:'none',cursor:'pointer'}}><img src={bookmark3} alt="bookmark" /></button>
</div>
</div>
  <div className="feed__container-content-box" style={{marginTop:'15px'}}>
<div>
  <h3>Definition</h3>
  <p>The user interface (UI) is the point of human-computer interaction and communication in a device. This can include display screens, keyboards, a mouse and the appearance of a desktop.</p>
</div>
<div>
<h3>History</h3>
  <p>The first machines were introduced on 1 March 1973, a decade before mass-market GUI machines became available.</p>
</div>
<div>
<h3>Example</h3>
<ol>
  <li>lorem ipsum</li>
<li>lorem ipsum</li>
<li>lorem ipsum</li>
  </ol>
</div>


  </div>
</div>
    </>
  )
    
}

export default WordMeaning
