import React from 'react'
import { Header,Feed,Buttons } from '../userComponent'



const SearchedWords = () => {
  return (
    <>
      <div className='section__padding' >
  <Header/>
</div>
<Feed header='Searched words' subhead='Most recently searched words '/>
    </>
  )
}

export default SearchedWords
