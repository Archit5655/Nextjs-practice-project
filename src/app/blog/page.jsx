import React from 'react'
import style from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
const blog =  async () => {
  const data=await getData()



  return (
    <div className={style.mcontainer}>
      {data.map((item)=>(
        <Link href="/blog/testid" className={style.container} key={item.id}>
        <div className={style.imgcont}></div>
        <Image src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' width={400} height={300} className={style.img}/>
        <div className={style.content}>
          <h1 className={style.title}> {item.title}</h1>
          <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vitae vero velit laborum pariatur esse placeat. Laborum, exercitationem! Rerum asperiores voluptatibus modi.</p>

        </div>



      </Link> 
      ))}
    </div>
  )
}

export default blog
