"use client"
import React from 'react'
import style from './page.module.css'
import { signIn } from 'next-auth/react'
const login = () => {
  return (
    <div className={style.container}>
    <button onClick={()=>signIn("google")}>Login with Google</button>
    </div>
  )
}

export default login
