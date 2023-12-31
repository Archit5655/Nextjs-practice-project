import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts",{ cache: 'no-store'} );

  if (!res.ok) {
   
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export const metadata = {
  title: "Blogs",
  description: "HEre are our blogs",
};
const blog = async () => {
  const data = await getData();

  return (
    <div className={style.mcontainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={style.container} key={item.id}>
          <div className={style.imgcont}></div>
          <Image
            src={item.img}
            alt=""
            width={400}
            height={300}
            className={style.img}
          />
          <div className={style.content}>
            <h1 className={style.title}> {item.title}</h1>
            <p className={style.desc}>
           {item.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default blog;
