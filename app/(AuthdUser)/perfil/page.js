import PurpleBackground from "@/app/components/purpleBackgroundAuthdUser/purpleBackground";
import styles from "./page.module.css"
import ProgressBar from "@/app/components/progressBar.component/ProgressBar";
import Link from "next/link";
import Image from "next/image";
import relogio from "@/app/Assets/AuthdUser/perfil/clock.svg"
import userImage from "@/app/Assets/AuthdUser/perfil/profileImage.svg"
import configButton from "@/app/Assets/AuthdUser/perfil/config.png"
import Aurora from "@/app/Assets/AuthdUser/perfil/Aurora.svg"

export default function Perfil() {
    return (
        <PurpleBackground>
            <div className={styles.contentContainer}>
                <div className={styles.contentEsquerda}>
                    <div className={styles.containerCima}>
                        <div className={styles.infoEsquerda}>
                            <h3>Hernando Silva</h3>
                            <p>Inicio da jornada de aprendizado</p>
                            <div className={styles.date}>
                                <div className={styles.containerDate}>
                                    <Image
                                        src={relogio}
                                        alt="relogio simbolizando a quanto tempo a conta foi criada"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <p>01/08/2023</p>
                            </div>
                        </div>
                        <div className={styles.infoDireita}>
                            <div className={styles.userImage}>
                                <Image
                                    src={userImage}
                                    alt="Foto de perfil"
                                    width={135}
                                    height={135}
                                />
                            </div>
                            <Link href={'/'}>
                                <button className={styles.configButton}>
                                <Image
                                    src={configButton}
                                    alt="Foto de perfil"
                                    width={40}
                                    height={40}
                                />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.missoesUsuario}>
                        <div className={styles.missaoDia}>
                            <h3>Missão do Dia</h3>
                            <p>Desbloqueie uma nova fase!</p>
                        </div>
                        <div className={styles.conquistas}>
                            <h3>Conquistas</h3>
                            <p>Elabore sua Primeira redação</p>
                            <button>VER MAIS</button>
                        </div>
                    </div>
                </div>
                <div className={styles.contentDireita}>
                    <ProgressBar />
                    <div className={styles.auroraContainer}>
                        <Image
                            src={Aurora}
                            alt="Nossa mascote Aurora"
                            width={250}
                            height={471}
                            className={styles.aurora}
                        />
                    </div>
                </div>
            </div>
        </PurpleBackground>
    )
}
