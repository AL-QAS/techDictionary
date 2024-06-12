import React from 'react'
import {useState,useEffect}from 'react'
import { Header,Feed,Buttons } from '../../componets/userComponent'
const NewWord = () => {
  const [changeWord, setChangeWord] = useState('');
  const [description, setDescription] = useState('');
  const [example, setExample] = useState('');

  const handleChangeWord = (e) =>{
setChangeWord(e.target.value)
  }

  const handleChangeDescription = (e) =>{
    setDescription(e.target.value)
      }

      const handleExample = (e) =>{
        setExample(e.target.value)
          }

  return (
    <>

    <div className='section__padding' >
   <Header/>
 </div>

 <div className="feed__container" style={{padding:'20px'}}>
   <h3 style={{marginLeft:'60px',paddingBottom:'10px',fontWeight:'bold'}}>Request for new  word</h3>
 <div className="feed__container-content-box">
   <form onSubmit={()=>{}}>
    <div style={{display:'flex',flexDirection:'column',margin:'10px 0'}}>
     <label style={{color:'#8F8F8F',fontSize:'24px'}}>Word</label>
     <input type='text' placeholder="input the word" onChange={handleChangeWord} value={changeWord} style={{padding:'10px',
        border:'2px solid #8F8F8F',
        fontSize:'20px',
        borderRadius:'6px'}}/>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <label style={{color:'#8F8F8F',fontSize:'24px'}}>Description</label>
     <input type='text' placeholder="input the Meaning" onChange={handleChangeDescription} value={description} style={{padding:'10px',
        border:'2px solid #8F8F8F',
        fontSize:'20px',
        borderRadius:'6px'}}/>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <label style={{color:'#8F8F8F',fontSize:'24px'}}>Example</label>
     <input type='text' placeholder="input Examples" onChange={handleExample} value={example} style={{padding:'10px',
        border:'2px solid #8F8F8F',
        fontSize:'20px',
        borderRadius:'6px'}}/>
    </div>
    <button type="submit" style={{width:'100%',
      textAlign:'center',
      backgroundColor:' #F5F5F5',
      marginTop:'10px',
      border:'none',
      padding:'4px',
      textTransform:'uppercase',
      fontSize:'24px',
      lineHeight:'28.8px',
      borderRadius:'6px'
      }}>Submit</button>
   </form>
 </div>

 </div>


   </>
  )
}

export default NewWord
