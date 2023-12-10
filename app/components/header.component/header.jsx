import Image from 'next/image.js'
import Menu from "@/app/components/burguerMenu/burguerMenu.jsx"
import Link from 'next/link.js'
import './header.css'

export default function Header() {
    return (
        <>
            <header className="cabecalho">
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
                    <nav className='navBar'>
                        <ul>
                            <li><Link className="navBarLink" href="/">Home</Link></li>
                            <li><Link className="navBarLink" href="/sobre">Sobre</Link></li>
                            <li><Link className="navBarLink" href="/suporte">Suporte</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="containerDireita">
                    <button className="btnEntrar">
                        <Link className="btnTexto" href="/login">Entrar</Link>
                    </button>
                    <button className="btnCadastrar">
                        <Link className="btnTexto" href="/cadastro">Cadastre-se</Link>
                    </button>
                </div>
                <Menu />
            </header>
            <div className="linha" />
        </>
    )
}