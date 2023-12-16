'use client'

import { jwtDecode } from 'jwt-decode'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import GoogleIcon from '@/app/Assets/logon/google.svg'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'
import Background from '@/app/components/backgroundWithColoredCircles.component/backgroundWithColoredCircles.jsx'
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import { useRouter } from 'next/navigation'
import { setSession } from '@/services/authentication/cookie-session.js'

export default function Login() {

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(JSON.stringify(data, null, 2));

        try {
            const response = await fetch("http://localhost:8080/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(data)
            });
            console.log(response);
            const serverResponse = await response.json();
            if (response.ok) {
                const token = serverResponse.token;
                if (token) {
                    await setSession(jwtDecode(token));
                    alert("Login feito");
                    router.push('/modulos')
                } else {
                    alert("Algo de errado não está certo! (erro de email/senha)")
                }
                console.log(serverResponse)
                alert("Deu certo")
            } else {
                alert("Erro ao fazer o login.");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Background heightContainer='100vh' circleColor='#6C33D7'>
            <div className={styles.ArrowBackButton}>
                <ArrowBackButton />
            </div>
            <div className={styles.textTop}>
                <h1>Que bom te ver<br />aqui novamente</h1>
                <h2>Vamos embarcar nessa jornada <br />épica de aprendizado!</h2>
            </div>

            <div className={styles.wrapper}>

                <div className={styles.form}>
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
                            <input
                                type="text"
                                placeholder="E-mail"
                                required
                                {...register("email", { required: true, validate: (value) => isEmail(value), })}
                            />
                        </div>
                        <div className={styles.inputbox}>
                            <input
                                type="password"
                                placeholder="Senha"
                                required
                                {...register("password", { required: true })}
                            />
                        </div>
                    </div>

                    <div className={styles.rememberforgot}>
                        <label><input type="checkbox" />Lembre-se de mim</label>
                        <Link href={'/senha_reset'}>
                            Esqueci a senha
                        </Link>
                    </div>
                    <button onClick={() => handleSubmit(onSubmit)()} className={styles.btn}>Entrar</button>
                </div>
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