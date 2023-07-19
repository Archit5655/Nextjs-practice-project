import React from 'react'
import style from './page.module.css'

const category = ({params}) => {
  console.log(params)
  return (
    <div className={style.container}>
      <h1 className={style.cattitle}> {params.category}</h1>
      <h3>no need of making this page as it is for my pactice</h3>

    </div>
  )
}

export default category
