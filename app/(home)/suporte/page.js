import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { exo, poppins } from '@/app/components/fonts.js'
import search from '@/public/Suporte/search.svg'
import BackGround from '@/app/components/backgroundLinearGradient.component/backgroundLinearGradient.jsx'

export default function Suporte() {

  const displaySectionContentStyle = {
    display: 'none',
  };

  return (
    <BackGround

      displaySectionContent={displaySectionContentStyle}
      mainContent={
        <main className={styles.mainContainer}>
          <div className={styles.containerTitle}>
            <h2 className={styles.title}>CENTRAL DE AJUDA</h2>
            <h3 className={`${styles.frase} ${poppins.className}`}>Estamos aqui por você</h3>
          </div>

          <form className={styles.doubts}>
            <input
              type="text"
              className={styles.inputDoubts}
              placeholder="| Digite suas dúvidas aqui">
            </input>
            <button className={styles.btnSearch} type='subimit'><Image alt="lupa de pesquisar" src={search} width='30' height='30' /></button>
          </form>

          <div className={styles.supportLinks}>
            <Link className={`${styles.link} ${poppins.className}`} href={'/'}>Solicitar um atendimento</Link>

            <Link className={`${styles.link}  ${poppins.className} `} href={'/denuncia'}>
              <div className={styles.reportButton}>Reportar Problema<img src='/Suporte/purpleBow.svg'></img></div>
            </Link>

          </div> 
        </main> 
      }

      sectionContent={''}

    />
  )
}