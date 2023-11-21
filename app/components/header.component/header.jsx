"use client"

import { exo } from '../fonts.js'
import Image from 'next/image.js'
import Link from 'next/link.js'
import styles from './header.css'

export default function Header() {
    return (
        <>
            <header className={`cabecalho ${exo.className}`}>
                <div className="containerEsquerda">
                    <div className="containerImage">
                        <Image
                            className="logo"
                            width={200}
                            height={55}
                            src="/logo.png"
                            alt="Logo Tutora.IA"
                        />
                    </div>
                    <nav>
                        <ul>
                            <li><Link className="navBarLink" href="/">Home</Link></li>
                            <li><Link className="navBarLink" href="/">Sobre</Link></li>
                            <li><Link className="navBarLink" href="/">Planos</Link></li>
                            <li><Link className="navBarLink" href="/">Suporte</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="containerDireita">
                    <div className="btnEntrar">
                        <Link className="btnTexto" href="/">Entrar</Link>
                    </div>
                    <div className="btnCadastrar">
                        <Link className="btnTexto" href="/">Cadastre-se</Link>
                    </div>
                </div>
            </header>
            <div className="linha" />
        </>
    )
}