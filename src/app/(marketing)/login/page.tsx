import LoginForm from '@/components/login/LoginPage'
import Footer from '@/components/navigations/Footer'
import Navbar from '@/components/navigations/Navbar'
import React from 'react'

const login = () => {
  return (
    <div>
        <Navbar/>
        <LoginForm/>
        <Footer/>
    </div>
  )
}

export default login
