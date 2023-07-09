"use client"
import Image from 'next/image'
import styles from './page.module.css'
import ImageForm from '../assets/Link/Camada-12.jpg'
import ImageHome from '../assets/Link/home.png'
import ImageLink from '../assets/Link/link.png'
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

  const routerForm = () => {
    console.log("link encontrado")
    router.push('/form')
  }
  const routerHome = () => {
    router.push('/home')
  }
  const routerLink = () => {
    router.push('/link')
  }
  
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.name}>Nome Teste</h1>
        <p className={styles.title}>Links Úteis:</p>
        <div className={styles.links}>
          
          <button  onClick={routerForm} className={styles.link}><Image src={ImageForm} width={300} height={125}/></button>
          <button onClick={routerHome} className={styles.link}><Image src={ImageHome} width={300} height={125}/></button>
          <button  onClick={routerLink} className={styles.link}><Image src={ImageLink} width={300} height={125}/></button>
          
          {/* <a href="/form" className={styles.link}><Image src={ImageForm} width={300} height={125}/></a>
          <a href="/home" className={styles.link}><Image src={ImageHome} width={300} height={125}/></a>
          <a href="/instagram" className={styles.link}><Image src={ImageLink} width={300} height={125}/></a> */}
        </div>
      </div>
    </main>
  )
}
