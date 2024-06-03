import { Stack,Box,Typography } from '@mui/material'
import './header.css'
import axios from 'axios'
import React ,{useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import  book  from '../../assets/book.svg'





const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
const [results,setResult] = useState([])

  const fetchData = (value) => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        const result = response.data.filter((note)=>{
          return value && note && note.word && note.word.toLowerCase().includes(value)
        })
        setResult(result)
      })
  }


  
  const handleChange = (value) => {
    setSearchTerm(value)
    fetchData(value)
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(searchTerm)
  };

  return (
    <div>
      <Stack justifyContent='center'
      direction="column"
      alignItems="center"
      >

   <Box display="flex"
   flexDirection='column'
    alignItems="center"
    justifyContent="center"
    gap={3}
    >

    <Box display="flex"
    alignItems="center"
    gap={2}
    >
    <img src={book} alt="book"/>   
    <p style={{color:'#2B00D7', fontSize:'30px', lineHeight:'34.5px'}}>Tech-dictionary</p>
     </Box>



   
    
    <p  className='p__heading'>Find the perfect word everytime with <br/> <span > Tech Dictionary</span></p>
     
     <p className='p__subHeading'>Discover a world of words at your fingertips and take your tech skills to the next level</p>
     <Paper
      component='form'
      
      onSubmit={handleSubmit}
      sx={{
      backgroundColor:'#F5F5F5',
        pl: 2,
        boxShadow: 'none',
      
      
        display: 'flex',
       justifyContent: 'spaceBetween'
         }}
    >
    
    
      
      <input
        className='search-bar'
        placeholder='Search for word'
        
        value={searchTerm}
        onChange={(e)=>handleChange(e.target.value)}/>
     
    

      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon/>
      </IconButton>
    </Paper>
    <Box sx={{
      width:'100%',
      backgroundColor:'#fff',
      display:'flex',
      flexDirection:'column',
      boxShadow:'0px 0px 8px #ddd',
      borderRadius: '10px',
      marginTop:'10px',
      maxHeight:'300px',
      overflowY: 'scroll'
    }}>

  
    
    


    
    

  {results.map((result,index)=>{
    return(
      
      <div key={index} style={{padding:'10px 20px'}}>{result.word}</div>
    )
  })}

    </Box>
     </Box>

      </Stack>
    </div>
  )
}

export default Header
