import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.mainChat}>
      <div className={styles.background}>
        <div className={styles.chatArea}>
            <main className={styles.main}>
                
                
                    <div className={styles.conversationCont}>
                        <div className={styles.header}>
                            <h2>CHAT COM A AURORA</h2>
                        </div>
                        <div className={styles.conversationScreen}>
                        <button className={styles.sound} type="button">
                        </button>
                            <div className={styles.userMenssage}>
                            <Image className={styles.iconUser} src='iconUser.svg' width="30" height="30"/>
                                <p>Quanto tempo tem de limite para fazer a redação do enem?</p>
                            </div>
                            <div className={styles.auroraMenssage}>
                                <p>Até a última informação disponível em janeiro de 2022, o prazo estabelecido para a
                                    elaboração da redação no Exame Nacional do Ensino Médio (Enem) era de 5 horas e 30
                                    minutos, abrangendo tanto a execução das provas objetivas quanto a produção textual.
                                    Recomenda-se, no entanto, que verifique as informações mais recentes no site oficial
                                    do Enem ou em comunicados do Instituto Nacional de Estudos e Pesquisas Educacionais
                                    Anísio Teixeira (INEP), pois as diretrizes podem ter sido alteradas desde então.</p>
                                    <Image className={styles.auroraIcon} src='iconAurora.svg' width="30" height="30"/>
                            </div>
                            <div className={styles.userMenssage}>
                            <Image className={styles.iconUser2} src='iconUser.svg' width="30" height="30"/>
                                <p>O que é anacronismo e como se escreve?</p>
                            </div>
                            <div className={styles.auroraMenssage}>
                                <p>"Anacronismo" é a forma correta de escrever essa palavra. Trata-se de um termo que se refere à inserção de algo em um período de tempo em que esse algo não poderia existir, seja no contexto de uma narrativa, objeto, conceito, etc. Em outras palavras, é a atribuição de características ou elementos fora de seu contexto temporal adequado. O anacronismo pode ocorrer em diversas áreas, como na arte, literatura, cinema, entre outras.</p>
                                <Image className={styles.auroraIcon} src='iconAurora.svg' width="30" height="30"/>
                            </div>
                        </div>
                        
                        <div className={styles.searchBar}>
                            <form action="">
                                <button type="submit" className={styles.microphone}></button>
                                <input type="text" placeholder={"Escreva aqui"} className={styles.input}/>
                                <button type="submit" className={styles.submitArrow}>
                                    </button>
                            </form>

                        </div>
                        
                    </div>
                    <div className={styles.container}>
                        <div className={styles.level}></div>
                    
                    <div className={styles.commonQuestions}>
                        <div className={styles.title}>
                            <h3>Perguntas recentes</h3>
                        </div>
                        <p className={styles.questions}>
                            Como se escreve mussarela?
                        </p>
                        <p className={styles.questions}>
                            Como se escreve a palavra mexer?
                        </p>
                        <p className={styles.questions}>
                            Mal ou mau?
                        </p>
                        <p className={styles.questions}>
                            Qual a diferença entre os 4 tipos de porquês?
                        </p>
                        <p className={styles.questions}>
                            "Ideia" tem acento?
                        </p>
                        <p className={styles.questions}>
                            Como se escreve exceção
                        </p>
                        <p className={styles.questions}>
                            O que é ditongo?
                        </p>
                    </div>
                </div>
            </main>
        </div>
    </div>


    
    </div>
  )
}
