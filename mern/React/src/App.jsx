import { useState } from 'react'
import Login from './components/Login'
import Signup from './components/SignUp'
import HomeLayout from './pages/HomeLayout'

function App() {

  const [signUp, setSignUp] = useState(false)

  const updateSignUp = () => {
    setSignUp(!signUp)
  }

  return (
    <>
      {/* {!signUp && <Login updateSignUp={updateSignUp} />}
      {signUp && <Signup updateSignUp={updateSignUp} />} */}
      <HomeLayout />
    </>
  )
}

export default App
