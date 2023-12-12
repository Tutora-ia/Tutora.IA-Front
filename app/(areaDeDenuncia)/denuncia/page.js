import Link from 'next/link';
import Styles from './page.module.css'
import ArrowBackButton from '../../components/arrowBackButton.component/arrowBackButton.jsx';
import ListItens from '@/app/components/contactList.component/contactList.jsx'
import Background from '@/app/components/backgroundWithPurpleCircles.component/backgroundWithPurpleCircles.jsx'

export default function Home() {
    return (

        <Background
        heightContainer={'100%'}>
            <div className={Styles.areaDeDenuncia}>

                {/* BOTÃO DE VOLTAR */}
                <div className={Styles.arrow}>
                    <ArrowBackButton />
                </div>

                {/* MAIN */}
                <div className={Styles.main}>

                    {/* TOP */}
                    <div className={Styles.topMain}>
                        <img className={Styles.logo} src='/Denuncia/logo.svg' alt='logo da Tutora.IA'></img>
                        <h2 className={Styles.title}>Reportar Problema</h2>
                        <img className={Styles.robot} src='/Denuncia/ErrorLampRobot.svg' alt='Robô sem energia'></img>
                    </div>

                    {/* BOTTON */}
                    <div className={Styles.bottonMain}>

                        {/* LEFT */}

                        <div className={Styles.leftContent}>
                            <img className={Styles.hands} src='/Denuncia/maoAbertaDenuncia.svg' alt='desenho de uma mão direita aberta, na cor branca e fundo roxo, com a palma para frente e o polegar fechado' />
                            <img className={Styles.hands} src='/Denuncia/maoFechadaDenuncia.svg' alt='desenho de uma mão direita fechada, na cor branca e fundo roxo, com os demais dedos cobrindo o polegar direito' />

                        </div>



                        {/* RIGHT */}
                        <div className={Styles.rightContent}>

                            <ListItens className={Styles.contactList}

                                listItem1={
                                    <div className={Styles.purpleBox} >
                                        <p>Fale com Especialistas</p>
                                        <img className={Styles.plus} src='/Denuncia/plus.svg' alt='botão para saber como falar com especialistas'></img>
                                    </div>}

                                listItem2={
                                    <div className={Styles.whiteBox}>
                                        <Link href='#'>Se precisar de ajuda em situação de violência doméstica, clique aqui ou ligue para o número da instituição XXXX-XXXX. Profissionais especializados estão prontos para oferecer apoio e orientação. Sua segurança é nossa prioridade.</Link>
                                    </div>}>

                            </ListItens>


                            {/* WHATSAPP DISQUE 100 */}

                            <ListItens className={Styles.contactList}

                                listItem1={
                                    <div className={Styles.purpleBox}>
                                        <p>Fale por Chat</p>
                                        <img className={Styles.plus} src='/Denuncia/plus.svg' alt='botão para saber como falar por chat'></img>
                                    </div>}

                                listItem2={
                                    <div className={Styles.whiteBox}>
                                        <Link href='https://api.whatsapp.com/send?phone=5561996110100'>Se precisar de ajuda, inicie uma conversa por chat. Lembre-se, você não está sozinha(o), e há apoio disponível.</Link>
                                    </div>}>

                            </ListItens>


                            {/* PHONES */}
                            <ListItens className={Styles.contactList}

                                listItem1={
                                    <div className={Styles.purpleBox} >
                                        <p>Fale por Telefone</p>
                                        <img className={Styles.plus} src='/Denuncia/plus.svg' alt='botão para saber como falar por telefone'></img>
                                    </div>}

                                listItem2={
                                    <div>
                                        <ul>
                                            <li className={`${Styles.whiteBox} ${Styles.telDisque100}`}>

                                                <Link href='tel:100'>CLique aqui ou disque 100 para falar com os Direitos Humanos. Lembre-se, você tem o direito de buscar ajuda.</Link>

                                            </li>

                                            {/* POLICE */}
                                            <li className={`${Styles.telPolice} ${Styles.whiteBox}`}>

                                                <Link href='tel:190'>CLique aqui ou ligue para a policia pelo número 190. Lembre-se, as autoridades estão lá para te apoiar.</Link>

                                            </li>
                                        </ul>
                                    </div>}>

                            </ListItens>

                            {/* VIDEOCALL */}

                            <ListItens className={Styles.contactList}

                                listItem1={
                                    <div className={Styles.purpleBox}>
                                        <p>Converse em Libras</p>
                                        <img className={Styles.plus} src='/Denuncia/plus.svg' alt='botão para ter mais informações para falar em libras com especialistas'></img>
                                    </div>}

                                listItem2={
                                    <div className={Styles.whiteBox}>
                                        <Link href='https://atendelibras.mdh.gov.br/acesso'>Se precisar de ajuda, inicie uma conversa em libras com pessoas especializadas clicando aqui.</Link>
                                    </div>}>

                            </ListItens>

                        </div>
                    </div>
                </div>




            </div>

        </Background>
    )
}