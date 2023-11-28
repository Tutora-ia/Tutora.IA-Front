import Image from 'next/image'
import styles from './page.module.css'
import Link from  'next/link'

export default function Home() {
  return (
    <main className={styles.mainTrail}> {/* body trail */}
        <div className={styles.containerTrail}>
              <div className={styles.containerCompleted}>

                  <button className={`${styles.button} ${styles.arrowBack}`}>
                    <div className={styles.back}>
                      <Image 
                      src='/Parabens/arrowBack.svg'
                      width="30" 
                      height="30" 
                      alt=''
                      />
                    </div> {/* end div arrow back */}
                  </button>

                  <h1>Acentuação</h1>

                  <div className={styles.level}>
                    <Image 
                    className={styles.logo} 
                    src='/Parabens/Union (1).svg' 
                    width="90" 
                    height="60" 
                    alt=''
                    />
                    <h4> Iniciante </h4>
                    <h5>1</h5>
                    <p>0%</p>
                </div> {/* end level */}
              </div> {/* container completed */}

              <div className={styles.containerAurora}>
                <h2>PARABÉNS <span>PUPIL♡!</span>, VOCÊ FOI ÍNCRIVEL!</h2>
              </div>{/* end container aurora */}
              <Image 
              className={styles.aurora} 
              src='/Parabens/Aurora.svg' 
              width={500} 
              height={500}
              alt=''
              />
            <button className={styles.btnnext}>
            <h2>CONTINUE</h2>
          </button>

        </div> {/* end container trail */}
    </main> //end main
  )
}
