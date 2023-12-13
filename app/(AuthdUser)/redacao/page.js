import PurpleBackground from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import styles from './page.module.css'
import ProgressBar from '@/app/components/progressBar.component/ProgressBar'
import LapisRedacao from '@/app/Assets/AuthdUser/redacao/LapisRedacao.svg'
import Image from 'next/image'
import RedacaoFeita from '@/app/components/redacoesFeitas.component/redacaoFeita'
import Link from 'next/link'


export default function Redacao() {
    return (
        <PurpleBackground>
            <div className={styles.contentContainer}>
                <div className={styles.containerTop}>
                    <p>Nova Redação</p>
                    <ProgressBar />
                </div>
                <Link href="/">
                    <button className={styles.buttonAddRedacao}>
                        <div className={styles.containerImgLapis}>
                            <Image
                                src={LapisRedacao}
                                alt="Simbolo de lapis para o botao de redação"
                                fill={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="lapisImage"
                            />
                        </div>
                    </button>
                </Link>
                <div className={styles.redacoesRecentes}>
                    <p>Redações Recentes</p>

                    
                    <RedacaoFeita />
                </div>
            </div>
        </PurpleBackground>
    )
}