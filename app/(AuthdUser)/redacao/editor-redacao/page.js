import PurpleBackground from "@/app/components/purpleBackgroundAuthdUser/purpleBackground";
import styles from "./page.module.css"
import Link from "next/link";
import Image from "next/image";
import ProgressBar from "@/app/components/progressBar.component/ProgressBar";

export default function Perfil() {
    return (
        <PurpleBackground>
            <div className={styles.contentContainer}>
                <div className={styles.containerEsquerda}>
                    <div className={styles.tipoRedacao}>
                        <h1>DESAFIO ENEM</h1>
                    </div>
                    <div className={styles.textoRedacao}>
                        <textarea className={styles.titulo} value="Normas de linguagem e liberdade" placeholder="insira o seu titulo" />
                        <textarea className={styles.redacao} value='O mercado de trabalho acaba excluindo e anulando o diferente, o preconceito linguístico ainda é uma pauta pouco abordada no meio corporativo. Normalmente as pessoas costumam escrever e falar do jeito que escutam, a variação linguística é influenciada por regiões e classe social. O regionalismo traz o vício de linguagem, expressões ou construções linguísticas que vão contra às normas gramaticais, que na hora de se expressar não vibializa a concordância, regência e colocação o que determina a fala como inconrreta, a pronúncia é diversa, mas compreenssivel e mesmo asssim quando recitada é tratada com desdem.
A fala é diferente em cada região e, mesmo assim, existe uma norma para o que é considerado "correto" na fala e escrita. Cada ambiente requer uma forma diferente de se expressar, sendo comum utilizar linguagens mais simples que se aproximem da linguagem falada em sua totalidade. Em músicas e poemas, há a chamada "licença poética", que concede liberdade ao escritor para ignorar as normas cultas e desvios da norma ortográfica, permitindo o uso de termos que se aproximam mais da linguagem falada. Isso dá total liberdade ao escritor para manipular as palavras de modo a torná-las compreensíveis da maneira pretendida a expressão.
Deve-se discutir mais sobre preconceito linguístico, as grandes mídias também dão pouco espaço a esse tipo de assunto, a falta de visibiladade faz com que ainda seja ignorada. Assim como todo preconceito, o linguístico é prejudicial, principalmente, quando o assunto é mercado de trabalho. Aceitar que a linguagem não é imutável e esquecer o padrão quando se trata de relacionamento com pessoas é importante para que estimulem das variedades linguísticas de forma que simplifique que apesar de existir a norma culta, existem variações linguistica.' />
                    </div>
                </div>
                <div className={styles.ContainerDireita}>
                    <ProgressBar />
                    <div className={styles.selecionaveis}>

                        <div className={styles.tempo}>
                            <p>tempo Restante</p>
                            <h3>90min 00s</h3>
                        </div>
                        <div className={styles.instrucoes}>
                            <p>Instruções</p>
                        </div>
                        <div className={styles.tema}>
                            <p>tema</p>
                        </div>

                    </div>

                    <button>CORRIGIR</button>
                </div>
            </div>
        </PurpleBackground>
    )
}

