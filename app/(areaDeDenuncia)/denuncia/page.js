import Link from 'next/link';
import Styles from './page.module.css'
import ArrowBackButton from '../../components/arrowBackButton.component/arrowBackButton.jsx';
import ListItens from '@/app/components/contactList.component/contactList.jsx'

export default function Home() {
    return (
        <div className={Styles.backgroundAreaDeDenuncia}>

            <div className={Styles.circle}></div>
            <div className={Styles.circle2}></div>

            {/* BOTÃO DE VOLTAR */}
            <div className={Styles.arrow}>
                <ArrowBackButton />
            </div>

            {/* MAIN */}
            <div className={Styles.main}>

                {/* LEFT */}
                <div className={Styles.leftMain}>
                    <div>
                        <img className={Styles.logo} src='/Denuncia/logo.svg' alt='logo da Tutora.IA'></img>
                        <img className={Styles.lacoRoxo} src='/Denuncia/laco.svg' alt='Laço Roxo representando a Concientização a Respeito da Violência Domética'></img>
                    </div>
                    <img className={Styles.aurora} src='/Aurora.svg'></img>

                </div>

                {/* RIGHT */}
                <div className={Styles.rightMain}>

                    <div className={Styles.centerImages}>
                        <img className={Styles.hands} src='/Denuncia/maoAbertaDenuncia.svg' alt='desenho de uma mão direita aberta, na cor branca e fundo roxo, com a palma para frente e o polegar fechado' />
                        <img className={Styles.hands} src='/Denuncia/maoFechadaDenuncia.svg' alt='desenho de uma mão direita fechada, na cor branca e fundo roxo, com os demais dedos cobrindo o polegar direito' />

                    </div>

                    <h2 className={Styles.title}>Reportar Problema</h2>

                    {/* CENTRO */}
                    <div className={Styles.center}>

                        {/* CONTACTS */}
                        <div className={Styles.contacts}>

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
                                        <Link href='https://atendelibras.mdh.gov.br/acesso'>Se precisar de ajuda, inicie uma conversa em libras com pessoas especializadas.</Link>
                                    </div>}>

                            </ListItens>

                        </div>


                    </div>
                </div>
            </div>




        </div>






        // <main className={styles.mainComplaint}>
        //   <div className={styles.backgroundComplaint}>

        //     {/* BOTÃO/SETA PARA VOLTAR */}
        //     <ArrowBackButton></ArrowBackButton>

        //     {/* TÍTULO, REPORTAR DENÚNCIA */}
        //     <div className={styles.topComplaint}>
        //       <h1 className={styles.h1Complaint}>REPORTAR DENÚNCIA</h1>
        //       <div className={styles.lacoRoxo}><Image src="LacoRoxo.svg" width={80} height={80} /></div>
        //     </div>

        //     {/* IMAGENS */}
        //     <div className={styles.imageAndBoxComplaint}>
        //       <div className={styles.imageComplaint}>
        //         {/* MÃO ABERTA */}
        //         <div className={styles.imageHandComplaint}>
        //           <Image src="maoAberta.svg" width={200} height={200}  />
        //         </div>
        //         {/* MAÃO FECHADA */}
        //         <div className={styles.imgMaoDenuncia}>
        //           <Image src="maoFechada.svg" width={200} height={200} />
        //         </div>
        //       </div>

        //       <div className={styles.boxComplaint}>
        //         <ul className={styles.accordion}>
        //           {/* SITE DA ONG */}
        //           <li>
        //             <input type="radio" name="acordiao" id="primeiro" />
        //             <label htmlFor="primeiro">Você não está sozinho(a), fale com um especialista
        //             <div className={styles.more}><Image src="more.svg" width={50} height={50}/></div>
        //             </label>
        //             <div className={styles.contentReport}>
        //               <p>
        //                 Você não está sozinha(o). Se precisar de ajuda em situação de violência doméstica, ligue
        //                 para o número da instituição <a href="">XXXX-XXXX</a>. Profissionais especializados
        //                 estão prontos para oferecer apoio e orientação. Sua segurança é nossa prioridade.
        //               </p>
        //             </div>
        //           </li>

        //           {/* CHAT DA ONG */}
        //           <li>
        //             <input type="radio" name="acordiao" id="segundo" />
        //             <label htmlFor="segundo">Fale por chat
        //             <div className={styles.more}><Image src="more.svg" width={50} height={50}/></div>
        //             </label>
        //             <div className={styles.contentReport}>
        //               <p>
        //                 Se precisar de ajuda, inicie uma conversa por chat com{' '}
        //                 <Link href="/">organizações</Link> de apoio ou amigos de confiança. Lembre-se, você não está sozinha(o), e há apoio disponível.
        //               </p>
        //             </div>
        //           </li>

        //           {/* TELEFONE DA POLÍCIA */}
        //           <li>
        //             <input type="radio" name="acordiao" id="terceiro" />
        //             <label htmlFor="terceiro">Fale por ligação
        //             <div className={styles.more}><Image src="more.svg" width={50} height={50}/></div>
        //             </label>
        //             <div className={styles.contentReport}>
        //               <p>
        //                 Inicie uma ligação às autoridades locais pelo número <a href="">190</a>.
        //               </p>
        //             </div>
        //             <div className={styles.contentReport}>
        //               <p>
        //                 Clique aqui e fale com a Central de Atendimento à Mulher ou ligue pelo seu celular para o número <a href="">180</a>.
        //               </p>
        //             </div>
        //             <div className={styles.contentReport}>
        //               <p>
        //                 Disque Direitos Humanos pelo número <a href="">100</a>. Lembre-se, você tem o direito de buscar ajuda, e as autoridades estão lá para apoiar.
        //               </p>
        //             </div>
        //           </li>
        //         </ul>
        //       </div>
        //     </div>
        //   </div>
        // </main>
    );
}
