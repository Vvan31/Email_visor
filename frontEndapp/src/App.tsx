import { useState } from 'react'
//import './App.css'
import  Login  from './pages/login'
import Mails from './pages/mails'
import React from 'react'
import EmailsList from './components/email-list'

function App() {
  const [user, setUser] = React.useState(null)

  async function login(user = null){// default user to null
    setUser(user)
  }

  async function logout(){
    setUser(null)
  }

  if(!user){
    return <Login login={login} />
  }else{

    return (
      <>
      <Mails /> 
      </>
    )
  }
}

export default App
