import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import GoogleIcon from '../assets/google.svg'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'


export default function Cadastro() {

    return (
        <div className={styles.backgroundLogin}>
            <div className={styles.ArrowBackButton}>
            <ArrowBackButton/>
            </div>
            <div className={styles.textTop}>
                <h1>Seja bem-vindo!</h1>
                <h2>Preparado para dar um play na sua<br />evolução gramatical?</h2>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <form className={styles.form} action="">
                    <h1>Cadastre-se</h1>

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
                            <input type="text" placeholder="Nome" required />
                        </div>

                        <div className={styles.inputbox}>
                            <input type="text" placeholder="E-mail" required />

                        </div>
                        <div className={styles.inputbox}>
                            <input type="password" placeholder="Senha" required />
                        </div>
                    </div>

                    <button type="submit" className={styles.btn}>
                        Cadastrar
                    </button>
                </form>
            </div>

            <div className={styles.textright}>
                <h1>Seja bem-vindo!</h1>

                <h2>Preparado para dar um play na sua<br />evolução gramatical?</h2>

                <h3>Já tem uma conta?</h3>

                <button type="button" className={styles.botao}>
                    <Link href={'/login'}>
                        Login
                    </Link>
                </button>

            </div>
        </div>
    )
}