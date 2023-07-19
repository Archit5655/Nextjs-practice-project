import React from 'react'
import style from './page.module.css'
import Link from 'next/link'
const portfolio = () => {
  return (

    <div className={style.container}>
      <div className={style.title}>
        <h1>
          Choose A Gallery
        </h1>

      </div>
      <div className={style.items}>
        <Link href="/portfolio/illustrations" className={style.item}>
          <span className={style.title2}> Illustration </span>
        </Link>  <Link href="/portfolio/websites" className={style.item}>
          <span className={style.title2}> Websites </span>
        </Link>  <Link href="/portfolio/applications" className={style.item}>
          <span className={style.title2}> Applications </span>
        </Link>
      </div>





    </div>
  )
}

export default portfolio
