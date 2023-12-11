import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import GoogleIcon from '../assets/google.svg'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'
import BackgroundLogin from '@/app/components/backgroundWithPurpleCircles.component/backgroundWithPurpleCircles.jsx'

export default function Cadastro() {

    return (
        <BackgroundLogin>
            <>
                <div className={styles.ArrowBackButton}>
                    <ArrowBackButton />
                </div>
                <div className={styles.main}>
                    <div className={styles.textTop}>
                        <h2>Que bom te ver aqui novamente!</h2>
                    </div>

                    <div className={styles.container}>

                        <form className={styles.form} action="">
                            <h1>Entrar</h1>

                            <div className={styles.icon}>
                                <Image
                                    className={styles.googleIcon}
                                    src={GoogleIcon}
                                    alt=''
                                    width={45}
                                    height={45}
                                />
                            </div>


                            <div className={styles.otherOptions}>
                                <div className={styles.line}>
                                    <hr className={styles.hrEstilizada} />
                                </div>
                                <p className={styles.ou}>OU</p>
                                <div className={styles.line}>
                                    <hr className={styles.hrEstilizada} />
                                </div>
                            </div>


                            <div className={styles.inputbox}>
                                <input type="text" placeholder="E-mail" required />

                            </div>
                            <div className={styles.inputbox}>
                                <input type="password" placeholder="Senha" required />
                            </div>

                            <div className={styles.rememberforgot}>
                                <label><input type="checkbox" />Lembre-se de mim</label>
                                <Link href={'/senha_reset'}>
                                    <p className={styles.forgot}>Esqueci a senha</p>
                                </Link>
                            </div>


                            <button type="submit" className={styles.btn}>
                                Entrar
                            </button>
                        </form>
                    </div>

                    <div className={styles.textright}>
                        <h1>Que bom te ver<br />aqui novamente!</h1>
                        <h2>Vamos embarcar nessa jornada <br />épica de aprendizado!</h2>

                        <h3>Não tem uma conta?</h3>

                        <button type="button" className={styles.button}>
                            <Link href={'/cadastro'}>
                                Cadastre-se
                            </Link>
                        </button>

                    </div>
                </div>
            </>
        </BackgroundLogin>
    )
}

