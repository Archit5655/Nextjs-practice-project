import React from "react";
import style from './footer.module.css'
import Image from "next/image";
const Footer = () => {
  return (
    <div className={style.container}>
      <div> ©2023 Best Designs For You. All Rights reserved.</div>
      <div className={style.socials}>
        <Image src="/icons/facebook.png" width={20}   className={style.icons} height={20} alt="facebook"/>
        <Image src="/icons/twitter.png" width={20}  className={style.icons} height={20} alt="facebook"/>
        <Image src="/icons/instagram.png" width={20}  className={style.icons} height={20} alt="facebook"/>
        <Image src="/icons/youtube.png" width={20}  className={style.icons} height={20} alt="facebook"/>
      </div>

    </div>
  );
};

export default Footer;
