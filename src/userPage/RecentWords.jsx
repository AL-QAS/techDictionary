import React from 'react'
import { Header,Feed,Buttons } from '../userComponent'

const RecentWords = () => {
  return (
    <>
      <div className='section__padding' >
  <Header/>
</div>
<Feed header='Recent words' subhead='Most recently updated words '/>
    </>
  )
}

export default RecentWords
