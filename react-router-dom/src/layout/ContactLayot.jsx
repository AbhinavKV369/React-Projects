import React from 'react'
import Contact from '../pages/Contact'
import {Outlet} from "react-router-dom"

const ContactLayot = () => {
  return (
    <div>
        <Contact/>
        <Outlet/>
    </div>
  )
}

export default ContactLayot