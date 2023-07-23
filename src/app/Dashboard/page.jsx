"use client"
import React,{useState,useEffect,} from 'react'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'


const dashboard = () => {
  // const [data, setdata] = useState([])
  // const [error, seterror] = useState(false)
  // const [isloading, setisloading] = useState(false)
  // useEffect(() => {
  // const getdata=async ()=>{
  //   setisloading(true)
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts",{ cache: 'no-store' } );

  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     seterror(true)
  //   }
  //   const data=await res.json()
  //   setdata(data)
  // setisloading(false)
  // }
  // getdata()
  
  // }, [])
  const session=useSession()
  console.log(session)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  
  return (


    <div>
 I am dashboard
    </div>
  )
}

export default dashboard
