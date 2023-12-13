'use client'

import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import GoogleIcon from '@/app/Assets/logon/google.svg'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'
import BackgroundLogin from '@/app/components/backgroundWithColoredCircles.component/backgroundWithColoredCircles.jsx'
import { useForm } from "react-hook-form";
import { isEmail } from "validator";

export default function Cadastro() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:8080/v1/auth/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
    
            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
            } else {
                alert("Erro ao cadastrar. Por favor, tente novamente.");
            }
        } catch (error) {
            console.error(error);
        }
    };
    
return (
    <BackgroundLogin heightContainer='100vh' circleColor='#6C33D7'>
        <>
            <div className={styles.ArrowBackButton}>
                <ArrowBackButton />
            </div>
            <div className={styles.main}>
                <div className={styles.textTop}>
                    <h1>Seja bem-vindo!</h1>
                    <h2>Preparado para dar um play na sua<br />evolução gramatical?</h2>
                </div>

                <div className={styles.container}>

                    <div className={styles.form} action="">
                        <h1>Cadastre-se</h1>

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
                            <input
                                className={errors?.name && styles.inputError}
                                type="text"
                                placeholder="Nome"
                                {...register("nome", { required: true })}
                            />
                        </div>

                        <div className={styles.inputbox}>
                            <input
                                className={errors?.name && styles.inputError}
                                type="text"
                                placeholder="E-mail"
                                {...register("email", { required: true, validate: (value) => isEmail(value), })}
                            />
                        </div>
                        <div className={styles.inputbox}>
                            <input
                                className={errors?.name && styles.inputError}
                                type="password"
                                placeholder="Senha"
                                {...register("senha", { required: true, minLength: 4 })}
                            />
                            {errors?.password?.type === "minLength" && (
                                <p className={styles.error}> A senha deve ter no minimo 4 caracteres </p>
                            )}
                        </div>
                        <button onClick={() => handleSubmit(onSubmit)()} className={styles.btn}>
                            Cadastrar
                        </button>
                    </div>
                </div>

                <div className={styles.textright}>
                    <h1>Seja bem-vindo!</h1>

                    <h2>Preparado para dar um play na sua<br />evolução gramatical?</h2>

                    <h3>Já tem uma conta?</h3>

                    <button type="button" className={styles.button}>
                        <Link href={'/login'}>
                            Login
                        </Link>
                    </button>
                </div>
            </div>
        </>
    </BackgroundLogin>
)
}