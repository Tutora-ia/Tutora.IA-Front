'use client'

import { useState } from 'react'
import Image from 'next/image.js'
import Menu from "./assets/Menu.svg"
import Link from 'next/link.js'
import './burguerMenu.css'



const menuBtn = () => {
    const [isListvisible, setIsListVisible] = useState(false);

    const menuBtnClicked = () => {
        setIsListVisible(!isListvisible);
    };
    return (
        <>
            <div className='divBtn'>
                <Image onClick={menuBtnClicked} className='menuBtn' src={Menu} alt="botão de menu"></Image>
            </div>

            {isListvisible &&
                <div className='containerMenu'>
                    <hr className='hrLine' />

                    <div className='menuMenuBtn'>
                        <ul>
                            <div className='listItensDiv'>
                                <div>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/sobre">Sobre</Link></li>
                                    <li><Link href="/suporte">Suporte</Link></li>
                                </div>
                                <div>
                                    <li><Link  href="/login">Entrar</Link></li>
                                    <li><Link  href="/cadastro">Cadastre-se</Link></li>
                                </div>
                            </div>
                        </ul>
                    </div>


                </div>
            }
        </>

    )
};




export default menuBtn 