import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Background from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'

export default function Home() {
  return (
    <Background
      children={
        <div className={styles.containerMap}>
          <div className={styles.back}>
            <ArrowBackButton />
          </div> {/* end div back */}

          <div className={styles.containerTitle}>
            <h1>Fase 1 - Crase</h1>
          </div>

          <div className={styles.container}>
            <div className={styles.containerExplication}>
              <div className={styles.text}>
                <p> A <span className={styles.pinkSpan}>crase</span> é como um encontro de vogais, rolando quando a preposição "<span className={styles.blueSpan}>a</span>" se une ao artigo feminino "<span className={styles.blueSpan}>a</span>" ou ao pronome "a".
                  <br></br> <br></br>

                  Para fixar a regra, dois versinhos famosos se destacam:
                  "Vou a, volto da: <span className={styles.blueSpan}>crase há!</span> Vou a, volto de: <span className={styles.blueSpan}>crase pra que</span>"
                  e "Quem volta da, <span className={styles.blueSpan}>crase no á</span>; Quem volta de, <span className={styles.blueSpan}>crase para quê?</span>"
                  <br></br> <br></br>

                  Na jornada pela crase, use a Estratégia do Substituto! Ao se questionar
                  sobre "vou a Paris", experimente trocar por "Volto <span className={styles.blueSpan}>de</span> Paris". Se a preposição
                  "<span className={styles.blueSpan}>de</span>" está presente, o correto é "Vou a Paris". Faça a mesmo tática com "vou <span className={styles.blueSpan}>à</span> Bahia"
                  e "Volto <span className={styles.blueSpan}>da</span> Bahia"
                  <br></br> <br></br>


                  Ao desbravar os enigmas dos pronomes demonstrativos, use a crase <span className={styles.blueSpan}>antes de artigos</span>
                  <span className={styles.blueSpan}>femininos</span> ou da
                  preposição "a". Exemplo: "Leonardo fez um pedido à Camille".
                  <br></br><br></br>

                  Lembre-se, sem crase sem crise! Utilize a crase antes de expressões que indicam <span className={styles.blueSpan}>horas</span>.
                  Mas, quando as palavras estiverem com as preposições <span className={styles.blueSpan}>para</span>, <span className={styles.blueSpan}> desde </span> e <span className={styles.blueSpan}> até</span>, o artigo não
                  recebe a crase:<br></br>
                  Com crase:<br></br>
                  “Ela acordou à(s) cinco horas da manhã para estudar."<br></br>
                  Sem crase:<br></br>
                  "Ela estuda desde as cinco horas da manhã.
                </p> {/* end paragraphe */}
              </div> {/* container explicação */}



            </div>{/* end containerExplication*/}
            
              <div className={styles.containerAurora}> {/* place talk aurora */}

                <div className={`${styles.button} ${styles.audio}`}>
                  <button className={styles.btnsong}>
                    <Image
                      src='/Explicacao/volume_fill.svg'
                      width="20"
                      height="20"
                      alt=''
                    />
                  </button>
                  <img className={styles.img}
                      src='/Explicacao/Aurora.svg'
                      alt=''
                    ></img>

                  

                </div> {/* end div button audo */}
                <Link class={`${styles.continue}`} href='/modulos/trilha/fase1/questoes'>
                      CONTINUAR
                    
                  </Link>
              </div>{/* end container aurora */}
            
          </div>
          <Link class={`${styles.continueBtnOut}`} href='/modulos/trilha/fase1/questoes'>
                      CONTINUAR
                    
                  </Link>
        </div>

      }
    />
  )
}
