import Image from 'next/image'
import styles from './page.module.css'
import Background from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton.jsx'
import Link from 'next/link'

export default function Home() {
  return (
    <Background

      content={

        <div className={styles.container}>
          <ArrowBackButton></ArrowBackButton>
          <main className={styles.main}>
            <div className={styles.rectangle1}>
              <h2 className={styles.training}>TREINAMENTO</h2>
            </div>

            <div className={styles.carrosselContainer} >
              <div className={styles.rowContainer}>
                <Link href={'/areaTreinamento/sabeMuito'}><img className={styles.sabeMuito} src='/AreaTreinamento/SabeMuito.png'>
                </img></Link>
                <img className={styles.letris} src='/AreaTreinamento/Letris.png'>
                </img>
                <img className={styles.forca} src='/AreaTreinamento/5Erros.png'>
                </img>
                <img className={styles.forca} src='/AreaTreinamento/Stop.png'>
                </img>
                <img className={styles.forca} src='/AreaTreinamento/Cruzar.png'>
                </img>

              </div>
            </div>
          </ main>
        </div>

      }

    />
  )
}
