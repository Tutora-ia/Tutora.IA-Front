import styles from './page.module.css'
import BackGround from '@/app/components/backgroundLinearGradient.component/backgroundLinearGradient.jsx'

export default function Home() {

    return (
        <BackGround BackGround
            mainContent={
                <>
                    {/* Sobre nós */}
                    <section section className={styles.aboutUs} >
                        <h2 className={styles.h2}>SOBRE NÓS</h2>

                        <img id="logo" src="/Sobre/LogomarcaTutoraIA.svg" alt="Logo do Tutora.IA" />
                        <p className={styles.pAboutUs}>Tutora.ia é uma plataforma repleta de dinâmicas de ensino, dedicada a capacitar indivíduos a atingir todo o seu potencial linguístico. Nossa inteligência artificial produz um material de apoio fundamental, visando tornar a experiência de aprendizado não apenas envolvente, mas também     irresistivelmente atrativa.</p>
                    </section >
                </>

            }

            sectionContent={
                <>
                    {/* Sobre a Aurora */}

                    <section section className={styles.aboutAurora} >
                        <img className={styles.aurora} src="/Sobre/Aurora.svg" alt="" />
                        <div className={styles.auroraContainerInformation}>
                            <h2 className={styles.h2}>QUEM É AURORA?</h2>
                            <p>A escolha de nomear a IA como 'Aurora' foi inspirada na educadora Aurora Seles, simbolizando a iluminação do conhecimento. Essa decisão reflete a capacidade inspiradora da IA no ambiente educacional.</p>
                        </div>

                    </section>

                    {/* Visão de Futuro e Escalabilidade */}

                    {/* Carregando */}

                    <section className={styles.loading}>
                        <h2>Atualizando...</h2>
                        <p>Expandiremos nossos conhecimentos para incluir história, matemática e inglês, proporcionando uma experiência ainda mais completa!</p>
                        <div className={styles.gears}>
                            <img className={`${styles.gear} ${styles.gear1}`} src='/Sobre/Engrenagem.svg'></img>
                            <img className={`${styles.gear} ${styles.gear2}`} src='/Sobre/Engrenagem.svg'></img>
                            <img className={`${styles.gear} ${styles.gear3}`} src='/Sobre/Engrenagem.svg'></img>
                            <img className={`${styles.gear} ${styles.gear4}`} src='/Sobre/Engrenagem.svg'></img>
                            <img className={`${styles.gear} ${styles.gear5}`} src='/Sobre/Engrenagem.svg'></img>
                            <img className={`${styles.gear} ${styles.gear6}`} src='/Sobre/Engrenagem.svg'></img>

                        </div>
                        <div className={styles.loadingBar}>
                            <div className={styles.loadingBarFill}></div>
                        </div>
                        <p>Teremos novos jogos interativos, acompanhados de um empolgante ranking entre os pupilos para desafios estimulantes e te envolver ainda mais na plataforma!</p>
                    </section>

                    {/* Subimdo de Nível */}
                    <section className={styles.levelingUp}>
                        <h2>Subindo de Nível</h2>
                        <img className={styles.level} src='/Sobre/NivelCapelo.png' alt=''></img>
                        <p>Além disso, estamos orgulhosos de apresentar nosso MVP (Most Valuable Player): um aplicativo mobile! Proporcionando acesso fácil e flexível a todo o conteúdo educacional!</p>
                    </section>

                    {/* Nosso Time */}

                    <section section className={styles.MeetOurTeam} >
                        <h2 className={styles.h2}>CONHEÇA O NOSSO TIME</h2>
                        <div className={styles.rowTeam}>

                            {/* Beatriz */}
                            <div className={styles.devContainer}>
                                <div className={styles.containerInformation}>

                                    <div className={styles.devInformation}>
                                        <img src="/Sobre/Beatriz.jpeg" id={styles.beatrizImage} className={styles.devPhoto} alt="" />
                                        <h3 className={`${styles.name} ${styles.nameBeatriz}`}>BEATRIZ KAILANE</h3>
                                        <p className={styles.devFunctions}>Financeiro, Marketing e Dev Back-End </p>
                                    </div>
                                    <div className={styles.devMessage}>
                                        <img className={styles.vector} src='/Sobre/BeatrizVector.png' alt=''></img>
                                        <p className={styles.message}>"Do início até o fim:  o importante é (re)começar."<br />(Pensador)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Camille */}
                            <div className={styles.devContainer}>
                                <div className={styles.containerInformation}>

                                    <div className={styles.devInformation}>
                                        <img src="/Sobre/Camille.jpeg" id={styles.camilleImage} className={styles.devPhoto} alt="" />
                                        <h3 className={`${styles.name} ${styles.nameCamille}`}>CAMILLE ALVES</h3>
                                        <p className={styles.devFunctions}>Scrum Master, Designer e Dev Front-End</p></div>
                                    <div className={styles.devMessage}>
                                        <img className={styles.vector} src='/Sobre/CamilleVector.png' alt=''></img>
                                        <p className={styles.message}>"Onde quer que você esteja, faça a diferença."<br />(Darcy Ribeiro)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Davi */}

                        <div className={styles.rowTeam}>
                            <div className={styles.devContainer}>
                                <div className={styles.containerInformation}>

                                    <div className={styles.devInformation}>
                                        <img src="/Sobre/Davi.jpeg" id={styles.daviImage} className={styles.devPhoto} alt="" />
                                        <h3 className={`${styles.name} ${styles.nameDavi}`}>DAVI RIBEIRO</h3>
                                        <p className={styles.devFunctions}>Designer e Dev Full Stack</p></div>
                                    <div className={styles.devMessage}>
                                        <img className={styles.vector} src='/Sobre/DaviVector.png' alt=''></img>
                                        <p className={styles.message}>“Eu não tenho nenhum talento especial. Sou apenas apaixonadamente curioso.”</p>
                                    </div>
                                </div>
                            </div>

                            {/* Erick */}
                            <div className={styles.devContainer}>
                                <div className={styles.containerInformation}>

                                    <div className={styles.devInformation}>
                                        <img src="/Sobre/Erick.jpeg" id={styles.erickImage} className={styles.devPhoto} alt="" />
                                        <h3 className={`${styles.name} ${styles.nameErick}`}>ERICK BADARÓ</h3>
                                        <p className={styles.devFunctions}>Marketing e Dev Front-End</p></div>
                                    <div className={styles.devMessage}>
                                        <img className={styles.vector} src='/Sobre/ErickVector.png' alt=''></img>
                                        <p className={styles.message}>   “There is no tomorrow” <br /> Não deixe para depois o que pode ser feito hoje</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hernando */}

                        <div className={styles.rowTeam}>
                            <div className={styles.devContainer}>
                                <div className={styles.containerInformation}>

                                    <div className={styles.devInformation}>
                                        <img src="/Sobre/Hernando.jpeg" id={styles.hernandoImage} className={styles.devPhoto} alt="" />
                                        <h3 className={`${styles.name} ${styles.nameHernando}`}>HERNANDO SILVA</h3>
                                        <p className={styles.devFunctions}>Gerente de Conteúdo e Dev Back-End</p></div>
                                    <div className={styles.devMessage}>
                                        <img className={styles.vector} src='/Sobre/HernandoVector.png' alt=''></img>
                                        <p className={styles.message}>“Carpe Diem”
                                            <br />Aproveite todos os momentos.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Leonardo */}
                            <div className={styles.devContainer}>
                                <div className={styles.containerInformation}>

                                    <div className={styles.devInformation}>
                                        <img src="/Sobre/Leonardo.jpeg" id={styles.leonardoImage} className={styles.devPhoto} alt="" />
                                        <h3 className={`${styles.name} ${styles.nameLeonardo}`}>LEONARDO SARDINHA</h3>
                                        <p className={styles.devFunctions}>Product Owner, Designer e Dev Full Stack</p></div>
                                    <div className={styles.devMessage}>
                                        <img className={styles.vector} src='/Sobre/LeonardoVector.png' alt=''></img>
                                        <p className={styles.message}>“Me disseram que eu não conseguiria, mas vou provar pra todos que estão errados.”</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Marcos */}

                        <div className={styles.rowTeam}>
                            <div className={styles.devContainer}>
                                <div className={styles.containerInformation}>
                                    <div className={styles.devInformation}>
                                        <img src="/Sobre/Marcos.jpeg" id={styles.marcosImage} className={styles.devPhoto} alt="" />
                                        <h3 className={`${styles.name} ${styles.nameMarcos}`}>MARCOS SENA</h3>
                                        <p className={styles.devFunctions}>Designer e Dev Front End</p></div>
                                    <div className={styles.devMessage}>
                                        <img className={styles.vector} src='/Sobre/MarcosVector.png' alt=''></img>
                                        <p className={styles.message}>“Tenha fé porque até do lixão nasce flor” <br />(Racionais)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Rian */}
                            <div className={styles.devContainer}>
                                <div className={styles.containerInformation}>

                                    <div className={styles.devInformation}>
                                        <img src="/Sobre/Rian.jpeg" id={styles.rianImage} className={styles.devPhoto} alt="" /><h3 className={`${styles.name} ${styles.nameRian}`}>RIAN CADAMURO</h3>
                                        <p className={styles.devFunctions}>Dev Full Stack</p></div>
                                    <div className={styles.devMessage}>
                                        <img className={styles.vector} src='/Sobre/RianVector.png' alt=''></img>
                                        <p className={styles.message}>“Todas as estrelas tem um motivo” <br />(Lil peep)</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>
                </>

            }

        />
    )
}
