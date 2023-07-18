import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import Button from '../components/button/Button'

const page = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Contact freely for any type of issue
      </h1>
      <div className={style.content}>

      <div className={style.img}>
        <Image src="/icons/contact.jpg" fill={true} 
        alt=''
        className={style.image} />
      </div>
      <form className={style.form}>
        <input type="text" placeholder='name' className={style.input} />
        <input type="text" placeholder='email' className={style.email} />
        <textarea className={style.textarea} placeholder='message'  cols="30" rows="10"></textarea>
        <Button url="#" text="sumbit" />
      </form>



        </div>
    </div>
  )
}

export default page
