import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../components/login/Signup'

const PublicRoutes = () => {
  return (
   <>
   <Routes>
    <Route  path="/" element={<Signup/>}    />
   </Routes>
   </>
  )
}

export default PublicRoutes