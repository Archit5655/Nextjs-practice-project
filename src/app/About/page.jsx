import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import Button from "../components/button/Button";
export const metadata = {
  title: "Designer-About",
  description: "This is About section",
};
const about = () => {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <Image src="/icons/photo1.jpg"   fill={true} alt="" className={style.innerimg} />

      <div className={style.text}>
        <h1 className={style.title}> Digital Storytellers</h1>
        <h2 className={style.desc}>
         
          Making best design for our clients and Users
        </h2>
      </div>
      </div>
      <div className={style.textcontainer}>
        <div className={style.item}>
          <h1 className={style.title}>Who Are We?</h1>
          <p  className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit ad in sed nostrum amet error minima adipisci accusamus corporis facilis earum laboriosam animi quae nihil illo, beatae natus sit placeat.
            <br />
             Quis ab adipisci itaque mollitia nam voluptatem dignissimos veritatis praesentium, est ut aperiam. Ipsam repudiandae blanditiis dolore rerum similique?</p>
        </div>
        <div className={style.item}>
        <h1 className={style.title}>What We Do?</h1>
        <p className={style.desc}>Lorem ipsum dolor sit, amet conbrsectetur adipisicing elit. Temporibus aperiam mollitia fugiat rerum nulla, pariatur deleniti eum doloribus corporis illum unde architecto consectetur nobis exercitationem, voluptas magni molestias blanditiis id vol
<br /> 
          uptates odio. Corrupti, eligendi. Ut cupiditate eum harum sint quidem doloribus voluptatibus, ratione aut sequi? Harum unde quo, odio qui asperiores sunt nobis. Cum nesciunt accusantium aut quod fugiat nisi.</p>
          <Button url="/Contact" text="Contact Us"/>
        </div>
      </div>
    </div>
  );
};

export default about;
