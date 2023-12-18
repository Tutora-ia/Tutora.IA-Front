import styles from './page.module.css'
import PurpleBackground from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import Link from 'next/link'
import TitleAuthdUser from '@/app/components/titleAuthdUser/titleAuthdUser.jsx'

export default function Home() {
  return (
<<<<<<< HEAD
    <PurpleBackground>


          <TitleAuthdUser>
             <h2 className={styles.training}>TREINAMENTO</h2>
          </TitleAuthdUser>
=======
    <Background>

        <div className={styles.container}>
          <ArrowBackButton/>
          <main className={styles.main}>
            <div className={styles.rectangle1}>
              <h2 className={styles.training}>TREINAMENTO</h2>
            </div>
>>>>>>> 71b624fc124eda2980d21b3cb7203dcea4c4ae57

            <div className={styles.carrosselContainer} >
            <Link className={styles.games} href={'/areaTreinamento/sabeMuito'}>
            <img className={styles.games} src='/AreaTreinamento/SabeMuito.png'></img>
                </Link>
                <img className={styles.games} src='/AreaTreinamento/5Erros.png'>
                </img>
                <img className={styles.games} src='/AreaTreinamento/Letris.png'>
                </img>
                
                <img className={styles.games} src='/AreaTreinamento/Stop.png'>
                </img>
                <img className={styles.games} src='/AreaTreinamento/Cruzar.png'>
                </img>

            </div>

<<<<<<< HEAD
    </PurpleBackground>




      

=======

      </Background>
>>>>>>> 71b624fc124eda2980d21b3cb7203dcea4c4ae57
  )
}
