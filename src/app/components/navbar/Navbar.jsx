"use client"
import Link from 'next/link'

import React from 'react'
import style from './navbar.module.css'
import Darkmode from '../darkmode/Darkmode'

const Navbar = () => {
  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        Beautify
      </Link>

    
    <div className={style.links}>
      
     <Darkmode/>
      <Link href="/About"> About </Link>
      <Link href="/Dashboard"> Dashboard </Link>
      <Link href="/Contact">Contact </Link>
      <Link href="/portfolio"> portfolio </Link>
      <Link href="/blog"> Blogs </Link>
<button className={style.logout} onClick={()=>{console.log("logout button")}}> Logout</button>
    </div>
    </div>
    
  )
}

export default Navbar
