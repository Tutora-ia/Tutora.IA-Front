
import Image from 'next/image.js'
import Menu from "@/app/components/burguerMenu/burguerMenu.jsx"
import Link from 'next/link.js'
import './header.css'
import ComponentAppear from '@/app/components/appearAndDesappear/appearAndDesappear.jsx'



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
                            <li><Link className="navBarLink" href="/#planes">Planos</Link></li>
                            <li><Link className="navBarLink" href="/sobre/">Sobre</Link></li>
                            <li><Link className="navBarLink" href="/suporte">Suporte</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="containerDireita">
                    <ComponentAppear
                        children={
                            <button className="btnEntrar">
                                <Link className="btnTexto" href="/login">Entrar</Link>
                            </button>
                        }

                        elementId={'btnLogin'}
                    />

                    <ComponentAppear
                        children={
                            <button className="btnCadastrar">
                                <Link className="btnTexto" href="/cadastro">Cadastre-se</Link>
                            </button>
                        }

                        elementId={'btnCadastro'}
                    />


                </div>
                <Menu />
            </header>
            <div className="linha" />
        </>
    )
}