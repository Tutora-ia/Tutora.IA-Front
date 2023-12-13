import Image from "next/image"
import Link from "next/link"
import styles from "./sideNavBar.css"
import Logo from "./assets/CapeloLogo.png"
import Chat from "./assets/Chat.png"
import Jogos from "./assets/Jogos.png"
import Missoes from "./assets/Missoes.png"
import Perfil from "./assets/Perfil.png"
import Redacao from "./assets/Redacao.png"
import Trilha from "./assets/Trilha.png"

export default function SideNavBar() {
  return (
    <div className="sideNavBar">
      <div className="cima">
        <div className="logoContainer">
            <Image
              src={Logo}
              alt="Logo Tutora.IA"
              fill={true}
              className="logoImage"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

        </div>
        <div className="navIcon">
<<<<<<< HEAD
          <Link className="Links" href="/modulos">
=======
          <Link className="Links" href="/modulos/trilha">
>>>>>>> 22adbf2c3692fd022af47b765e62f4eafd6688d7
            <Image
              src={Trilha}
              alt="Icone Trilha"
              width={70}
              height={70}
            />
          </Link>

          <Link className="Links" href="/chat_aurora">
            <Image
              src={Chat}
              alt="Icone Chat"
              width={65}
              height={65}
            />
          </Link>

          <Link className="Links" href="/areaTreinamento">
            <Image
              src={Jogos}
              alt="Icone Jogos"
              width={65}
              height={65}
            />
          </Link>

          <Link className="Links" href="/">
            <Image
              src={Missoes}
              alt="Icone Missões"
              width={65}
              height={65}
            />
          </Link>

          <Link className="Links" href="/redacao">
            <Image
              src={Redacao}
              alt="Icone Redacao"
              width={65}
              height={65}
            />
          </Link>
        </div>
      </div>
      <div className="perfil">
        <Link className="Links" href="/perfil">
          <Image
            src={Perfil}
            alt="Icone Perfil"
            width={90}
            height={90}
          />
        </Link>
      </div>
    </div>
  )
}