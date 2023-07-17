import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      
     
      <Link href="/About"> About </Link>
      <Link href="/Dashboard"> Dashboard </Link>
      <Link href="/Contact">Contact </Link>
      <Link href="/portfolio"> portfolio </Link>
      <Link href="/blog"> Blogs </Link>

    </div>
    
  )
}

export default Navbar
