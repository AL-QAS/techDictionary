import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'
import { HomePage,Bookmarks,ChangeWord,NewWord,RecentWords,SearchedWords } from './pages/userPage'
import { UserRequest,Account,Dashboard,LoginPage,Words} from './pages/adminPage'
import ForgotPassword from './componets/adminComponent/ForgotPasswoed'
import ResetPasssword from './componets/adminComponent/ResetPassword'




const App = () => {
  return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/bookmarks" element={<Bookmarks/>} />
       <Route path="/changeWord" element={<ChangeWord />} />
       <Route path="/newWord" element={<NewWord />} />
       <Route path="/recentWords" element={<RecentWords />} />
       <Route path="/SearchedWords" element={<SearchedWords/>} />
       <Route path="/account" element={<Account />} />
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/login-page" element={<LoginPage />} />
       <Route path="/forgot-password" element={<ForgotPassword />} />
       <Route path="/reset-password" element={<ResetPasssword />} />
       <Route path="/userRequest" element={<UserRequest />} />
       <Route path="/Words" element={<Words />} />
       
     </Routes>

   </BrowserRouter>
  )
}

export default App
