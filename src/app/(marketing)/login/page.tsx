import LoginForm from '@/components/login/LoginPage'
import Footer from '@/components/navigations/Footer'
import Navbar from '@/components/navigations/Navbar'
import React, { Suspense } from 'react'

const login = () => {
  return (
    <div>
        <Navbar/>
      <Suspense fallback={null}>
        <LoginForm/>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default login
