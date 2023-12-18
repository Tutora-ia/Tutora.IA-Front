import PurpleBackground from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import styles from './page.module.css'
import RedacaoFeita from '@/app/components/redacoesFeitas.component/redacaoFeita'
import Image from "next/image";
import LapisRedacao from '@/app/Assets/AuthdUser/redacao/LapisRedacao.svg'


export default function Redacao() {
    return (
        <PurpleBackground>
            <div className={styles.contentContainer}>
                <div className={styles.containerTop}>
                    <p>Nova Redação</p>
                </div>
                <button className="min-h-[125px] w-[17vw] h-[19vh] flex items-center justify-center bg-white cursor-pointer rounded-[20px] border-none">
                    <div className="relative w-[8vw] h-[8vh]">
                        <Image
                            src={LapisRedacao}
                            alt="Simbolo de lapis para o botao de redação"
                            fill={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </button>
                <div className={styles.redacoesRecentes}>
                    <p>Redações Recentes</p>
                    <RedacaoFeita />
                </div>
            </div>
        </PurpleBackground>
    )
}