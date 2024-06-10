import React from 'react'
import { Header,Feed,Buttons } from '../userComponent'
const WordMeaning = () => {
  return (
    <>
     <div className='section__padding' >
  <Header/>
</div>
<div className="feed__container">
<div className="WOD">
  <p>Word of the </p>
  <span>dd/m/y</span>
</div>
<div className="feed__word" style={{marginTop:'5px'}}>
  Word
  <span>noun</span>
</div>
  <div className="feed__container-content-box" style={{marginTop:'15px'}}>
<div>
  <h3>Definition</h3>
  <p>lorem ipsum</p>
</div>
<div>
<h3>Definition</h3>
  <p>lorem ipsum</p>
</div>
<div>
<h3>Definition</h3>
  <p>lorem ipsum</p>
</div>


  </div>
</div>
    </>
  )
    
}

export default WordMeaning
