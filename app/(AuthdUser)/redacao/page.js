import PurpleBackground from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import styles from './page.module.css'
import RedacaoFeita from '@/app/components/redacoesFeitas.component/redacaoFeita'
import ModalRedacao from '@/app/components/modals.components/modalRedacao'


export default function Redacao() {
    return (
        <PurpleBackground>
            <div className={styles.contentContainer}>
                <div className={styles.containerTop}>
                    <p>Nova Redação</p>
                </div>
                <ModalRedacao/>
                <div className={styles.redacoesRecentes}>
                    <p>Redações Recentes</p>
                    <RedacaoFeita />
                </div>
            </div>
        </PurpleBackground>
    )
}