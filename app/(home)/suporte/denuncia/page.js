import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.mainComplaint}>
      <div className={styles.backgroundComplaint}>
        <button type='button' className={styles.buttonBackReport}>
          <Image src="setaEsquerda.svg" width={50} height={50} layout="responsive" />
        </button>

        <div className={styles.topComplaint}>
          <h1 className={styles.h1Complaint}>REPORTAR DENÚNCIA</h1>
          <div className={styles.lacoRoxo}><Image src="LacoRoxo.svg" width={80} height={80} /></div>
        </div>

        <div className={styles.imageAndBoxComplaint}>
          <div className={styles.imageComplaint}>
            <div className={styles.imageHandComplaint}>
              <Image src="maoAberta.svg" width={200} height={200}  />
            </div>
            <div className={styles.imgMaoDenuncia}>
              <Image src="maoFechada.svg" width={200} height={200} />
            </div>
          </div>

          <div className={styles.boxComplaint}>
            <ul className={styles.accordion}>
              <li>
                <input type="radio" name="acordiao" id="primeiro" />
                <label htmlFor="primeiro">Você não está sozinha, fale com um especialista
                <div className={styles.more}><Image src="more.svg" width={50} height={50}/></div>
                </label>
                <div className={styles.contentReport}>
                  <p>
                    Você não está sozinha(o). Se precisar de ajuda em situação de violência doméstica, ligue
                    para o número da instituição <a href="">XXXX-XXXX</a>. Profissionais especializados
                    estão prontos para oferecer apoio e orientação. Sua segurança é nossa prioridade.
                  </p>
                </div>
              </li>
              <li>
                <input type="radio" name="acordiao" id="segundo" />
                <label htmlFor="segundo">Fale por chat
                <div className={styles.more}><Image src="more.svg" width={50} height={50}/></div>
                </label>
                <div className={styles.contentReport}>
                  <p>
                    Se precisar de ajuda, inicie uma conversa por chat com{' '}
                    <Link href="/">organizações</Link> de apoio ou amigos de confiança. Lembre-se, você não está sozinha(o), e há apoio disponível.
                  </p>
                </div>
              </li>
              <li>
                <input type="radio" name="acordiao" id="terceiro" />
                <label htmlFor="terceiro">Fale por ligação
                <div className={styles.more}><Image src="more.svg" width={50} height={50}/></div>
                </label>
                <div className={styles.contentReport}>
                  <p>
                    Inicie uma ligação às autoridades locais pelo número <a href="">190</a>, a
                    Central de Atendimento à Mulher pelo <a href="">180</a> ou Disque Direitos Humanos pelo
                    número <a href="">100</a>. Lembre-se, você tem o direito de buscar ajuda, e as
                    autoridades estão lá para apoiar.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
