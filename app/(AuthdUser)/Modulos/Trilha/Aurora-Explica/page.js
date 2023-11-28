import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.mainExplication}>
      <div className={styles.containerMap}>

        <div className={styles.containerExplication}>
          <div className={styles.text}>
            <p>"Partiu mergulhar nos mistérios dos acentos gráficos, aquelas setinhas e curvinhas que dão um charme extra às palavras!
              Trazendo um pouco de ação para a língua portuguesa, temos o acento agudo (´), a crase (`), e o acento circunflexo (^).
              Eles são as regras  que mandam no som das palavras, uma verdadeira trilha sonora que dá ritmo ao nosso papo. E a crase, saca só, é como um encontro épico de vogais, rolando quando a preposição "a" se une ao artigo feminino "a" ou ao grandão "a" de pronomes.
              É tipo desbloquear o próximo nível da língua portuguesa!

              Versinhos Mágico:
              Para fixar a regra, dois versinhos famosos se destacam:
              “Vou a, volto da: crase há! Vou a, volto de: crase pra quê?”
              ou:
              “Quem volta da, crase no à; Quem volta de, crase para quê?”

              Vamos desvendar os segredos da crase de uma maneira mais interessante! Por exemplo, quando você estiver se perguntando se deve ou não acentuar a frase "vou a Paris", experimente uma estratégia: faça a troca por "Volto de Paris". Se a preposição "de" está na jogada, o correto é escrever "Vou a Paris".
              Da mesma forma, ao explorar o uso da crase em "vou a Bahia", substitua por "Volto da Bahia". Assim, com a preposição "da", a grafia da frase se revela como "vou à Bahia".

              No uso dos pronomes demonstrativos aquele(s), aquela(s), aquilo, utilize a crase antes de um artigo feminino ou preposição "a".                  Exemplo: "refiro-me àquela namorada de Andrew" - a crase une preposição, artigo feminino e pronome demonstrativo numa sinfonia de vogais acentuadas.
              Partiu mergulhar nos mistérios dos acentos gráficos, aquelas setinhas e curvinhas que dão um charme extra às palavras 
              Trazendo um pouco de ação para a língua portuguesa, temos o acento agudo (´), a crase (`), e o acento circunflexo (^).
              Eles são as regras  que mandam no som das palavras, uma verdadeira trilha sonora que dá ritmo ao nosso papo. E a crase, saca só, é como um encontro épico de vogais, rolando quando a preposição "a" se une ao artigo feminino "a" ou ao grandão "a" de pronomes.
              É tipo desbloquear o próximo nível da língua portuguesa! 
              
                Versinhos Mágico:
              Para fixar a regra, dois versinhos famosos se destacam:
              “Vou a, volto da: crase há! Vou a, volto de: crase pra quê?”
              ou:
              “Quem volta da, crase no à; Quem volta de, crase para quê?”
              
                Vamos desvendar os segredos da crase de uma maneira mais interessante! Por exemplo, quando você estiver se perguntando se deve ou não acentuar a frase "vou a Paris", experimente uma estratégia: faça a troca por "Volto de Paris". Se a preposição "de" está na jogada, o correto é escrever "Vou a Paris". 
              Da mesma forma, ao explorar o uso da crase em "vou a Bahia", substitua por "Volto da Bahia". Assim, com a preposição "da", a grafia da frase se revela como "vou à Bahia".
              
                No uso dos pronomes demonstrativos aquele(s), aquela(s), aquilo, utilize a crase antes de um artigo feminino ou preposição "a".
              Exemplo: "refiro-me àquela namorada de Andrew" - a crase une preposição, artigo feminino e pronome demonstrativo numa sinfonia de vogais acentuadas.
              </p> {/* end paragraphe */}
            </div> {/* container explicação */}
          
            <div className={styles.containerTitle}>
            <h1>Fase 1</h1>
            
            <button className={`${styles.button} ${styles.arrowBack}`}>
              <div className={styles.back}>
                <Image 
                src='/Explicacao/arrowBack.svg' 
                width="30" 
                height="30"
                alt=''
                />
                </div> {/* end div back */} 
              </button> {/* end button array */}
            
              <section>
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
                  <div className={styles.img}>
                    <Image 
                    src='/Explicacao/Aurora.svg' 
                    width="150" 
                    height="500"
                    alt=''
                    />
                  </div>
                    <button class={`${styles.button} ${styles.continue}`}> 
                      <h2>CONTINUAR</h2>
                    </button>

                  </div> {/* end div button audo */}
                </div>{/* end container aurora */}
              </section>
            
              <div className={styles.level}>
                <Image 
                className={styles.logo} 
                src='/Explicacao/Union (1).svg' 
                width="90" 
                height="60"
                alt=''
                />
                <h4> Iniciante </h4> 
                <h5>1</h5>
                <p>0%</p>
              </div> {/* end div level */}
            
            </div>{/* end containerTitle*/}
          </div>{/* end containerExplication*/}
        </div>{/* end container map */}    
      </main> //end main
      )
}
