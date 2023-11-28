import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.mainTrail}> {/* body trail */}
      <div className={styles.containerTrail}>
        <div className={styles.containerMap}>
          <div className={styles.maskTrail}>

            <li className={styles.titleTrail}> {/* menu trail */}

              <button className={styles.btnBack} type='buton'>
                <Link href='/'>
                  <Image
                    src='/Trilha/arrow_right_fill.svg'
                    width="30"
                    height="100"
                    alt=''
                  />
                </Link>
              </button>

              <h1>Acentuação</h1>

            </li> {/* end menu trail */}

            <div className={styles.level}>
              <Image
                className={styles.logo}
                src='/Trilha/Union.svg'
                width="90"
                height="60"
                alt=''
              />
              <h4> Iniciante </h4>
              <h5>1</h5>
              <p>%0</p>
            </div>

            <button className={styles.dayMission}>
              <Link href='/'>
                <h2>Missão do dia</h2>
                <p>Desbloqueie uma nova fase!</p>
              </Link>
            </button>

            <section className={styles.decorations}>

              <Image
                className={styles.bigThree}
                src='/Trilha/bigThree.svg'
                height='150'
                width='250'
                alt=''
              />
              <Image
                className={styles.plate}
                src='/Trilha/plate.svg'
                height='120'
                width='120'
                alt=''
              />
              <Image
                className={styles.threeOne}
                src='/Trilha/three.svg'
                height='50'
                width='50'
                alt=''
              />
              <Image
                className={styles.auroraTrail}
                src='/Trilha/Aurora.svg'
                height='200'
                width='200'
                alt=''
              />

              <section className={styles.containerThree}>
                <Image
                  className={styles.three}
                  src='/Trilha/three.svg'
                  height='50'
                  width='50'
                  alt=''
                />
                <Image
                  className={styles.three}
                  src='/Trilha/three.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </section> {/* end section layout three */}

            </section> {/* end div decoration */}

            <div className={styles.trail}>

              <button className={`${styles.levelUnlocked} ${styles.level0}`}> {/* level 0 button */}
                <Image
                  src='/Trilha/Unlocked.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </button>
              <svg className={`${styles.line1} ${styles.linhaUnlocked}`} width="144" height="55" viewBox="0 0 164 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M133 1.0.8595 3 20.5 3.49993 53.5" stroke-width="5" />
              </svg>

              <button className={`${styles.levelLocked} ${styles.level1}`}> {/* level 1 button */}
                <Image
                  src='/Trilha/Lock.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </button>
              <div className={styles.line2}>
                <div className={styles.curve}></div>
              </div>

              <button className={`${styles.levelLocked} ${styles.level2}`}> {/* level 2 button */}
                <Image
                  src='/Trilha/Lock.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </button>
              <div className={styles.line3}>
                <div className={styles.curve}></div>
              </div>

              <button className={`${styles.levelLocked} ${styles.level3}`}> {/* level 3 button */}
                <Image
                  src='/Trilha/Lock.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </button>
              <div className={styles.line4}>
              </div>

              <button className={`${styles.levelLocked} ${styles.level4}`}> {/* level 4 button */}
                <Image
                  src='/Trilha/Lock.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </button>
              <div className={styles.line5}>
              </div>

              <button className={`${styles.levelLocked} ${styles.level5}`}> {/* level 5 button */}
                <Image
                  src='/Trilha/Lock.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </button>

              <button className={`${styles.levelLocked} ${styles.level6}`}> {/* level 6 button */}
                <Image
                  src='/Trilha/Lock.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </button>
              <div className={styles.line6}>
              </div>

              <button className={`${styles.levelLocked} ${styles.level7}`}> {/* level 7 button */}
                <Image
                  src='/Trilha/Lock.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </button>
              <div className={styles.line7}>
              </div>

              <button className={`${styles.levelLocked} ${styles.level8}`}> {/* level 8 button */}
                <Image
                  src='/Trilha/Lock.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </button>
              <div className={styles.line8}>
              </div>
              <button className={`${styles.levelLocked} ${styles.level9}`}> {/* level 9 button */}
                <Image
                  src='/Trilha/Lock.svg'
                  height='50'
                  width='50'
                  alt=''
                />
              </button>
              <div className={styles.line9}>
              </div>

            </div> {/* end trail */}
          </div> {/* end mask trilha*/}
        </div>{/* end container map */}
      </div> {/* end container trail */}
    </main> //end main
  )
}
