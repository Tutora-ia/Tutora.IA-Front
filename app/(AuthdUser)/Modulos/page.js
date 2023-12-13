import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ProgressBar from '@/app/components/progressBar.component/ProgressBar'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.containerMap}>
        <div className={styles.containerModule}>
          <div className={styles.containerTitle}>
            <h1>TRILHAS</h1>
            <div className={styles.containerPhase}>
              <section>
                <button class={`${styles.button} ${styles.accentuation}`}>
                  <Link href={'/modulos/trilha'}>
                    <h1>Acentuação</h1>
                    <div className={styles.mortarboard}><Image
                      src='/Modulos/capeloTrilha.svg'
                      width="100"
                      height="100"
                      alt=''
                    />
                    </div>
                  </Link>
                </button>
                <button class={`${styles.button} ${styles.adverb}`}>
                  <div className={styles.lock}><Image
                    src='/Modulos/Lock.svg'
                    width="170"
                    height="170"
                    alt=''
                  />
                  </div>
                  <h1>Advérbio</h1>
                </button>
                <button class={`${styles.button} ${styles.adjective}`}>
                  <div className={styles.lock}><Image
                    src='/Modulos/Lock.svg'
                    width="170"
                    height="170"
                    alt=''
                  />
                  </div>
                  <h1>Adjetivo</h1>
                </button>
                <button class={`${styles.button} ${styles.pronoun}`}>
                  <div className={styles.lock}><Image
                    src='/Modulos/Lock.svg'
                    width="170"
                    height="170"
                    alt=''
                  />
                  </div>
                  <h1>Pronome</h1>
                </button>
                <button class={`${styles.button} ${styles.crasis}`}>
                  <div className={styles.lock}><Image
                    src='/Modulos/Lock.svg'
                    width="170"
                    height="170"
                    alt=''
                  />
                  </div>
                  <h1>Crase</h1>
                </button>
                <button class={`${styles.button} ${styles.substantive}`}>
                  <div className={styles.lock}><Image
                    src='/Modulos/Lock.svg'
                    width="170"
                    height="170"
                    alt=''
                  />
                  </div>
                  <h1>Substantivo</h1>
                </button>
              </section>
              <button class={styles.arrowLeft}>
                <Image
                  src='/Modulos/arrowLeft.svg'
                  width="50"
                  height="50"
                  alt=''
                /></button>
              <button class={styles.arrowRight}>
                <Image
                  src='/Modulos/arrowRight.svg'
                  width="50"
                  height="50"
                  alt=''
                />
              </button>

              {/* <ProgressBar /> */}


            </div>{/* end containerPhase*/}
          </div>{/* end containerTitle*/}
        </div>{/* end containerModule*/}
      </div>{/* end container map */}
    </main> //end main
  )
}
