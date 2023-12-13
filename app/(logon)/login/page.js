import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import GoogleIcon from '@/app/Assets/logon/google.svg'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'
import Background from '@/app/components/backgroundWithColoredCircles.component/backgroundWithColoredCircles.jsx'


export default function Login() {

    return (
        <Background heightContainer='100vh' circleColor='#6C33D7'>
            <div className={styles.ArrowBackButton}>
                <ArrowBackButton/>
            </div>
            <div className={styles.textTop}>
                <h1>Que bom te ver<br />aqui novamente</h1>
                <h2>Vamos embarcar nessa jornada <br />épica de aprendizado!</h2>
            </div>

            <div className={styles.wrapper}>
               
                <form className={styles.form} action="">
                    <h1>Login</h1>
                    <div className={styles.icon}>
                        <Image
                            className=''
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


                    <div className={styles.box}>
                        <div className={styles.inputbox}>
                            <input type="text" placeholder="E-mail" required />
                        </div>
                        <div className={styles.inputbox}>
                            <input type="password" placeholder="Senha" required />
                        </div>
                    </div>

                    <div className={styles.rememberforgot}>
                        <label><input type="checkbox" />Lembre-se de mim</label>
                        <Link href={'/senha_reset'}>
                            Esqueci a senha
                        </Link>
                    </div>

                    <button type="submit" className={styles.btn}>Entrar</button>
                </form>
            </div>

            <div className={styles.textright}>
                <h1>Que bom te ver<br />aqui novamente</h1>

                <h2>Vamos embarcar nessa jornada<br />épica de aprendizado!</h2>

                <h3>Não tem uma conta?</h3>

                <button type="button" className={styles.botao}>
                    <Link href={'/cadastro'}>
                        Cadastre-se
                    </Link>
                </button>
            </div>
        </Background>
    )
}