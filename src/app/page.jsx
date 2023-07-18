import Image from 'next/image'
import styles from './page.module.css'
import homeimage from 'public/icons/homepage.jpg'

export default function Home() {
  return (
    <>

    
 <div>
  <Image src={homeimage}  width={500} height={500} alt='' className={styles.img}  />
  

  
 </div>
    </>
  )
}
