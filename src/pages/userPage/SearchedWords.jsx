import React from 'react'
import { Header,Feed,Buttons } from '../../componets/userComponent'



const SearchedWords = () => {
  return (
    <>
      <div className='section__padding' >
  <Header/>
</div>
<Feed header='Searched words'/>
    </>
  )
}

export default SearchedWords
