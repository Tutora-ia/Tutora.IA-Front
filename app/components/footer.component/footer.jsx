import { poppins } from '../fonts.js'
import Image from 'next/image.js'
import Link from 'next/link.js'
import styles from './footer.css'

export default function Footer() {
    return (
        <>
            <div className="linha" />
            <footer className={`rodape ${poppins.className}`} >
                <div className="footerEsquerda">
                    <p>Menu</p>
                    <ul>
                        <li><Link className="Links" href="/">Home </Link></li>
                        <li><Link className="Links" href="/">Sobre</Link></li>
                        <li><Link className="Links" href="/">Alguma Coisa</Link></li>
                        <li><Link className="Links" href="/">Suporte</Link></li>
                    </ul>
                </div>
                <div className="footerMeio">
                    <p>Termos de privacidade</p>
                    <ul>
                        <li><Link className="Links" href="/">Normas da Comunidade</Link></li>
                        <li><Link className="Links" href="/">Termos de uso</Link></li>
                        <li><Link className="Links" href="/">Privacidade</Link></li>
                    </ul>
                    <p>E-mail</p>
                    <Link className="Links" href="mailto:tutora.ia@outlook.com">Tutora.IA@outlook.com</Link>

                    <p>Copyright</p>
                </div>
                <div className="footerDireita">
                    <p>Redes Sociais</p>
                    <ul>
                        <li><Link className="Links" href="/">Instagram</Link></li>
                        <li><Link className="Links" href="/">Facebook</Link></li>
                        <li><Link className="Links" href="/">Twitter</Link></li>
                        <li><Link className="Links" href="/">Whatsapp</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}