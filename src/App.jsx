
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { HomePage,Bookmarks,ChangeWord,NewWord,RecentWords,SearchedWords,WordMeaning } from '../src/userPage'
import { UserRequest,Account,Dashboard,LoginPage,Words, Analytics, Setting, Logout} from '../src/adminPage'

const App = () => {
  return (
    <div>
     <Router>
     <Routes>
     <Route path="/" element={<HomePage />} />
       <Route path="/wordMeaning" element={<WordMeaning />} />
       <Route path="/bookmarks" element={<Bookmarks/>} />
       <Route path="/changeWord" element={<ChangeWord />} />
       <Route path="/newWord" element={<NewWord />} />
       <Route path="/recentWords" element={<RecentWords />} />
       <Route path="/SearchedWords" element={<SearchedWords/>} />
       <Route path="/account" element={<Account />} />
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/loginPage" element={<LoginPage />} />
       <Route path="/userRequest" element={<UserRequest />} />
       <Route path="Analytics" element={<Analytics />} />
       <Route path="Setting" element={<Setting />} />
       <Route path="Logout" element={<Logout />} />
       <Route path="/Words" element={<Words />} />
     </Routes>
   </Router>
    </div>
  )
}

export default App

