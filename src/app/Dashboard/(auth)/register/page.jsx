"use client";
import React,{useState} from "react";
import style from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
const Register =  () => {

  const [error, seterror] = useState(null);
 const router =useRouter()
  const handleSumbit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      
      res.status===201 && router.push("/Dashboard/login?success=Account has been created")
      
    }
    
    catch (error) {
      seterror(true);
      console.log(error);
    }
  };
    return (
      <div className={style.container}>
      <form onSubmit={handleSumbit} className={style.form} >
        <input
          type="text"
          placeholder="username"
          className={style.input}
          required
        />
        <input
          type="=email"
          placeholder="email"
          className={style.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={style.input}
          required
        />

        <button className={style.button} >Register</button>
      </form>
      {error && "Something went Wrong!"}
      <Link className={style.link} href={"/Dashboard/login"}>
    
        Login with existing account
      </Link>
    </div>
  );
};

export default Register;
