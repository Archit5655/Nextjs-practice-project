"use client"
import React,{useContext} from 'react'
import style from './darkmode.module.css'
import { Contextapi } from '@/app/context/contextapi'

const Darkmode = () => {
    const {toggle,mode} = useContext(Contextapi)
  return (
    <div className={style.container} onClick={toggle}>
        <div className={style.dark}> 🌙</div>
        <div className={style.dark}>🔆</div>
        <div className={style.ball} style={mode==="light" ? {left:"2px"} :{right:"2px"}}/>



      
    </div>
  )
}

export default Darkmode
