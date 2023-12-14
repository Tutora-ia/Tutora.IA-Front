'use client'

import { createContext, React, useContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import GoogleIcon from '@/app/Assets/logon/google.svg'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'
import Background from '@/app/components/backgroundWithColoredCircles.component/backgroundWithColoredCircles.jsx'
import { ApplicationContext } from '@/app/(authdUser)/context/ProviderApplication'
import { useForm } from "react-hook-form";
import { isEmail } from "validator";


export default function Login() {
    
    const { setUser, setLocalUser, setAuth } = useContext(ApplicationContext);

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
                    "accept": "/*"
                },
                body: JSON.stringify(data)
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                const token = data.token;
                if(token){
                    window.localStorage.setItem('token', token);
                    const localUser = jwtDecode(token);
                    setUser(localUser);
                    setAuth(true);
                    alert("Cadastro realizado com sucesso!");
                } else {
                    alert("Algo de errado não está certo! (erro de email/senha)")
                }
            } else {
                alert("Erro ao cadastrar. Por favor, tente novamente.");
            }
        } catch (error) {
            console.error(error);
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
                                    {...register("password", { required: true})}
                                />
                            </div>
                        </div>

                        <div className={styles.rememberforgot}>
                            <label><input type="checkbox" />Lembre-se de mim</label>
                            <Link href={'/senha_reset'}>
                                Esqueci a senha
                            </Link>
                        </div>
                        <Link href={.}
                        <button onClick={() => handleSubmit(onSubmit)()} type="submit" className={styles.btn}>Entrar</button>
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
}