import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { exo, poppins } from '@/app/components/fonts.js'
import search from './assets/search.svg'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton.jsx';



export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.containerTitle}>
        <h1 className={`${styles.title} ${exo.className}`}>CENTRAL DE SUPORTE</h1>
        <h3 className={`${styles.frase} ${poppins.className}`}>Estamos aqui por você</h3>
      </div>

      <div className={styles.duvidas}>
        <input 
          type="text" 
          className={styles.textoDuvidas} 
          placeholder="| Digite suas dúvidas aqui">               
        </input>
          <Image className={styles.btnSearch} src={search} width='30' height='30'/>
      </div> {/* end div duvidas */}

      <div className="aba">
          <Link className={`${styles.link}  ${poppins.className} `} href={'/'}> Denúncia </Link>

          <Link className={`${styles.link} ${poppins.className}`} href={'/'}> Enviar uma solicitação </Link>

          <Link className={`${styles.link} ${poppins.className}`} href={'/'}> Contato </Link>  
      </div> {/*end aba */}
    </main> //end main
  )
}