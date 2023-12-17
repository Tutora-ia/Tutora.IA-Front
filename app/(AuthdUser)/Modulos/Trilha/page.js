import styles from './page.module.css'
import Link from 'next/link'
import React from 'react'
import Background from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton.jsx'


export default function Home() {
  return (
    <Background>
      <div className={styles.mainTrail}>
        <header>
          <ArrowBackButton />
          <div className={styles.divTrailName}>
            <div className={styles.divBackgrounTrailName}>
              <h2 className={styles.trailName}>Demo</h2>
            </div>

          </div>
        </header>

        <main className={styles.trailContent}>
          <div className={styles.trail}>

            {/* LINES */}
            <div className={`${styles.linhaEmL1} ${styles.linhaEmL} ${styles.linhaEmLOpen}`}></div>

            <div className={`${styles.linhaEmL2} ${styles.linhaEmL} ${styles.linhaEmLOpen}`}></div>

            <div className={`${styles.linhaEmL3} ${styles.linhaEmL} ${styles.linhaEmLOpen}`}></div>

            <div className={`${styles.linhaEmL4} ${styles.linhaEmL} `}></div>


            {/* SQUARES */}
            <Link href={'./trilha/fase1/auroraExplica'}>
              <div className={`${styles.squareFase1} ${styles.squareFaseOpens} ${styles.squareFases}`}>

                <div className={`${styles.square2Fase1} ${styles.square2FaseOpen} ${styles.square2Fases}`}>
                  <div className={styles.faseIcon}>
                    <img className={styles.faseIcon} src='/Modulos/pinkHat.svg'></img>
                  </div>

                  {/* <div className={styles.bubbleDiv}>
                    <img className={styles.bubble} src='/Modulos/bubble.svg'></img>
                    <h2>Iniciar</h2>
                  </div>*/}
                </div>
              </div></Link>

            <div className={`${styles.squareFase2} ${styles.squareFases}`}>
              <div className={`${styles.square2Fase2} ${styles.square2Fases}`}>

                <div className={styles.bubbleDiv}>
                  <img className={styles.bubble} src='/Modulos/bubble.svg'></img>
                </div>

                <div className={styles.faseIcon}>
                  {/* <img className={styles.faseIcon} src='/Modulos/lockImage.svg'></img> */}
                  <img className={styles.faseIcon} src='/Modulos/pinkHat.svg'></img>
                </div>

              </div>
            </div>

            <div className={`${styles.squareFase3} ${styles.squareFases}`}>
              <div className={`${styles.square2Fase3} ${styles.square2Fases}`}>

                <div className={styles.bubbleDiv}>
                  <img className={styles.bubble} src='/Modulos/bubble.svg'></img>
                </div>

                <div className={styles.faseIcon}>
                  {/* <img className={styles.faseIcon} src='/Modulos/lockImage.svg'></img> */}
                  <img className={styles.faseIcon} src='/Modulos/pinkHat.svg'></img>
                </div>

              </div>
            </div>

            <div className={`${styles.squareFase4} ${styles.squareFases}`}>
              <div className={`${styles.square2Fase4} ${styles.square2Fases}`}>

                <div className={styles.bubbleDiv}>
                  <img className={styles.bubble} src='/Modulos/bubble.svg'></img>
                </div>

                <div className={styles.faseIcon}>
                  {/* <img className={styles.faseIcon} src='/Modulos/lockImage.svg'></img> */}
                  <img className={styles.faseIcon} src='/Modulos/pinkHat.svg'></img>
                </div>

              </div>
            </div>


            {/* IMAGES AND ICONS */}
            <img className={styles.auroraLine} src='/Modulos/auroraLine2.svg'></img>
            <img className={styles.plate} src='/Modulos/plate.svg'></img>
            <img className={styles.trees} src='/Modulos/trees.svg'></img>
            <img className={styles.trees2} src='/Modulos/trees.svg'></img>
            <img className={styles.trees3} src='/Modulos/trees.svg'></img>
            <img className={styles.treesAndMountain} src='/Modulos/treesAndMountain.svg'></img>


          </div>

        </main>


      </div> 
    </Background>
  )
}
