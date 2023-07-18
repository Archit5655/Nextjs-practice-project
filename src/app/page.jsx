import Image from "next/image";
import styles from "./page.module.css";
import homeimage from "public/icons/homepage.jpg";
import Button from "./components/button/Button";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <h1 className={styles.title}>
            Eye-Catching Design For Your Products
          </h1>
          <p className={styles.desc}>
            Turning your idea into Reality. We bring together the teams from the
            global tech industry
          </p>
    <Button url="/portfolio" text="See Our Works"/>

        </div>
        <div className={styles.items}>
          <Image
            src={homeimage}
            width={500}
            height={500}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    </>
  );
}
