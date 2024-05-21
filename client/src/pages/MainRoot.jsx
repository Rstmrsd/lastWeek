import React from 'react'
import {Outlet} from "react-router-dom"

import Header from '../assets/layout/Header'
import Footer from '../assets/layout/Footer'

const MainRoot = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainRoot