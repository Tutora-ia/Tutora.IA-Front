import Image from 'next/image'
import styles from './page.module.css'
import { FiArrowRight } from "react-icons/fi";


export default function Home() {
  return (
    <main className={styles.mainQuestions}>
      <div className={styles.containerMap}>

        <div className={styles.containerQuestions}>
          <h1>Acentuação</h1>

          <button className={`${styles.button} ${styles.arrowBack}`}>
            <div className={styles.back}>
              <Image src='/Questoes/arrowBack.svg' 
              width="30" 
              height="30" 
              alt=''
              />
            </div> {/* end div arrow back */}
          </button>

          <div className={styles.question}>
            <h3>Pergunta:</h3>
            <p>
              Qual dessas opções possui a acentuação íncorreta?
            </p>
          </div>

          <section className="alternatives">
            <button className={`${styles.button} ${styles.responseOne}`}>
              <p>1. Vou a Lisboa</p>
            </button>

            <button className={`${styles.button} ${styles.responseTwo}`}>
              <p>2. Vou à Bahia</p>
            </button>

            <button className={`${styles.button} ${styles.responseThree}`}>
              <p>3. Vou a Recife</p>
            </button>

            <button className={`${styles.button} ${styles.responseFour}`}>
              <p>4. Vou à São Paulo</p>
            </button>
          </section> {/* end section buttons */}

          <div className={styles.responseBar}>

            <div className={styles.containerInput}>
            <button>
              <Image 
              className={styles.buttonToTalk} 
              src='/Questoes/Subtract.svg' 
              width='30' 
              height='30'
              alt=''
              />
            </button>
              <input type="text" placeholder='Digite aqui'/>

              <button>
                <FiArrowRight className={styles.buttonToSend} size={30} color="#fff" background="transparent" />
              </button>

            </div> {/* end container input */}
          </div>{/*end div response bar*/}
          
          <button className={styles.btnnext}>
            <h2>CONTINUE</h2>
          </button>
          <div className={styles.level}>
            <Image 
            className={styles.logo} 
            src='/Questoes/Union (1).svg' 
            width="90" 
            height="60" 
            alt=''
            />
            <h4> Iniciante </h4>
            <h5>1</h5>
            <p>0%</p>
          </div> {/* end level */}

        </div>{/* end containerQuestions*/}
      </div>{/* end container map */}
    </main> /*end main*/
  )
}
