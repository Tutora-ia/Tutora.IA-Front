import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}> {/* the container fill a section */}
        <div className={styles.navBar}>
          <div className={styles.mask}>
            {/* tittle, sub tittle and description */}
            <h1 className={styles.title}>
              TUTORA.IA
            </h1>
            <h2 className={styles.subTitle}>SUA ESCRITA, NOSSA MISSÃO: EXCELÊNCIA EM COMUNICAÇÃO</h2>
            <p className={styles.description}>
              Colocando um ponto final nos seus <br></br>
              questionamentos da Língua Portuguesa.
            </p>

            {/* image aurora */}
            <div className={styles.aurora}>
              <Image
                alt='Foto da nossa IA Aurora'
                src="Aurora.svg" width={500} height={500}
                layout='responsive'
              />
            </div>
            {/* buttons register and login */}
            <div className={styles.btn}>

              <button type='button' className={styles.btnStyle}>
                <Link href="/">
                  <h2>CADASTRAR</h2>
                </Link>
              </button>

              <br></br>

              <button type='button' className={`${styles.btnStyle} ${styles.btn2}`}>
                <Link href="/">
                  <h2>LOGIN</h2>
                </Link>
              </button>

            </div> {/*end aurora div  */}
          </div> {/* end effect mask */}
        </div> {/* end navbar  */}
      </div> {/* end container */}

      <div className={styles.containerTwo}>
        {/* content two */}
        <h1>Gamificando seu <br></br>
          aprendizado</h1>
        <p>
          Pronto para se aventurar em uma jornada gamificada que revolucionará a maneira como as<br></br>
          pessoas elevam seu nível em português? Apresentamos a você uma plataforma dinâmica e <br></br>
          dedicada ao aprimoramento da língua portuguesa! Explore nosso conteúdo:
        </p>

        {/* icons image section */}
        <div className={styles.section}>
          <section>

            <div>
              <Image
                className={`${styles.icon} ${styles.trilha}`}
                src="trilha.svg"
                width={200}
                height={200}
                alt='Foto da nossa trilha'
              />
              <h2>Trilha <br></br> de estudos</h2>
            </div>

            <div>
              <Image
                className={`${styles.icon} ${styles.joystick}`}
                src="joystick.svg"
                width={200}
                height={200}
                alt='icone em formato de joystick'
              />

              <h2>Jogos<br></br>
                Interativos</h2>
            </div>

            <div>
              <Image
                className={`${styles.icon} ${styles.mission}`}
                src="mission.svg"
                width={200}
                height={200}
                alt='icone missão'
              />
              <h2>Missões e <br></br>
                objetivos</h2>
            </div>

            <div>
              <Image 
              className={`${styles.icon} ${styles.chat}`}
              src="chat.svg" 
              width={200} 
              height={200}
              alt='icone chat'
              />
              <h2>Lições com a <br></br>
                Aurora</h2>
            </div>

            <div>
              <Image 
              className={`${styles.icon} ${styles.correct}`}
              src="correct.svg" 
              width={200} 
              height={200}
              alt='icone correct'
              />
              <h2>Correção de <br></br>
                Redações</h2>
            </div>

            <div>
              <Image 
              className={`${styles.icon} ${styles.right}`}
              src="right.svg" 
              width={200} 
              height={200}
              alt='right icon'
              />
              <h2>Aprendizado de<br></br>
                Qualidade!</h2>
            </div>

          </section> {/* end section images */}
        </div> {/* end section div*/}
      </div> {/* end containerTwo */}

      <div className={styles.containerThree}>
        {/* title containerThree */}
        <h1>NOSSOS DIFERENCIAIS</h1>

        <section>
          <Image 
          className={`${styles.diferent} ${styles.ia}`}
          src="IA.svg" 
          width={350} 
          height={350}
          alt='IA icon'
          />
          <div className={styles.intelegence}>
            <h2>Inteligência Artificial</h2>
            <p>
              Nossa IA, Aurora, impulsiona sua evolução de <br></br>
              conhecimento por meio de módulos <br></br>
              explicativos e exercícios dinâmicos, <br></br>
              proporciona uma experiência de aprendizado <br></br>
              envolvente que esclarece dúvidas e alinha <br></br>
              conceitos textuais.
            </p>
          </div> {/* end div ia */}
        </section> {/* end section */}

        <section>
          <div className={styles.apprenticeship}>
            <h2>Expandindo seu aprendizado</h2>
            <p>
              Pontuamos uma abordagem educacional <br></br>
              envolvente, onde, por meio de diversas estratégias, <br></br>
              impulsionamos a evolução e equilibramos o nível, <br></br>
              reconhecendo as diferentes demandas de cada <br></br>
              usuario sem ficar restritos a soluções únicas.<br></br>
              Nosso foco é no indivíduo, adaptando-nos às suas <br></br>
              particularidades para aprimorar a experiência de <br></br>
              aprendizado no "game" da educação,  em que cada <br></br>
              peça é fundamental e suas particularidades são o <br></br>
              epicentro da estratégia.
            </p>
          </div>  {/*end div apprenticeship */}

          <Image 
          className={`${styles.diferent} ${styles.learning}`}
          src="learning.svg" 
          width={400} 
          height={400}
          alt='learning icon'
          />

        </section> {/* end section */}
      </div> {/* containerThree */}

      <div className={styles.containerFour}>
        <h1>PLANOS</h1>

        <h2>
          Faça um upgrade no seu aprendizado! Escolha seu <br></br>
          plano ideal para um futuro mais que perfeito.
        </h2>

        <section >

          <div className={styles.containerFree}> {/* card plan style */}

            <h3 className={styles.titleplans}>Básico</h3>
            <h4 className={styles.subtitleplans}>Funcionalidades gratuitas</h4>

            <p>Trilha de aprendizado</p>
            <p>Desafio Enem</p>
            <p>1 redação por semana e 2 treinos de redação</p>
            <p>10 perguntas diárias para a IA</p>
            <p>Missões diárias e desafios </p>

            <button type="button" className={`${styles.btnFour} ${styles.free}`}><Link href="#">
              CRIAR CONTA</Link>
            </button>
          </div>   {/*end div container free*/}

          <div className={`${styles.containerFree} ${styles.containerMonthly}`}>
            <h3 className={styles.titleMonthly}>PREMIUM MENSAL</h3>

            <h4>R$XXX,XX<span>/por mês</span></h4>
            <p>Correções ilimitadas de redações </p>
            <p>Conversas ilimitadas com a IA Aurora</p>
            <p>Trilha de estudos Personalizada  </p>
            <p>Novos modelos de avaliação </p>
            <p>Correção, criação e explicação de exercícios ilimitadas</p>

            <button type="button" className={`${styles.btnFour} ${styles.monthly}`}><Link href="X">
              EXPERIMENTAR 7
              DIAS GRÁTIS</Link>
            </button>
          </div> {/* end div container monthly */}

          <div className={`${styles.containerFree} ${styles.containerYear}`}>
            <h3 className={styles.destaque1}>PREMIUM ANUAL</h3>

            <h4>R$XXX,XX<span>/por mês</span></h4>
            <p>Correção de redações limitada à 1 vez ao mês</p>
            <p>Tirar dúvidas com a IA Tutora, limitado a 5 perguntas diárias</p>
            <p>Missões e objetivos </p>
            <p>Trilha de estudos Personalizada </p>
            <p>Correção e explicação de exercícios</p>
            <p>Melhor custo benefício a longo prazo</p>

            <button type="button" className={`${styles.btnFour} ${styles.year}`}><Link href="X">
              EXPERIMENTAR 7
              DIAS GRÁTIS</Link>
            </button>

          </div> {/* end container year */}
        </section> {/* end section plans */}
      </div> {/* end container four */}

      <div className={styles.containerFive}>
        <h1>COMO A PLATAFORMA FUNCIONA?</h1>

        <div className={styles.videoContainer}>
          <video width="1500" height="700" controls autoplay muted loop>
            <source src="TutoraIA.mp4" type='video/mp4' />
          </video>

        </div>{/*end div video */}
      </div> {/*end containerFive */}
    </main> //end body

  )
}
