import Head from 'next/head';
import Link from 'next/link';
import { lighten } from 'polished';
import { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const UI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  width: 75vw;
  height: 75vh;
  border-radius: 5rem;
  background: ${({ theme }) => lighten(0.05, theme.secondary)};
  @media (max-width: 800px) {
    width: 80vw;
  }
  @media (max-width: 425px) {
    height: 50vh;
  }
  @media (max-width: 320px) {
    height: 40vh;
  }
`;

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShowModal(!showModal);
  }

  function handleClick(e) {
    if (e.target.getAttribute('class') != null) {
      if (e.target.getAttribute('class').includes('modal')) {
        setShowModal(false);
      }
    }
  }

  return (
    <div>
      <Head>
        <title key="title">Purnat</title>
        <meta name="description" content="Purnat" key="meta" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {showModal ? (
        <Modal className="modal" onClick={e => handleClick(e)}>
          <UI>
            <div className="obrigado">
              <img className="star-1" src="/star-1.svg" alt="" />
              <h1>Obrigado!</h1>
              <img className="star-2" src="/star-2.svg" alt="" />
            </div>
            <p className="aviso">
              Você vai receber o link das aulas no seu email todas as semanas a
              partir do dia 22 de outubro.
            </p>
            <div className="invite">
              <strong>Entre no grupo do WhatsApp</strong> para não perder
              nenhuma aula, também enviaremos por lá ;)
            </div>
            <Link href="https://web.whatsapp.com/">
              <div className="whatsapp-button">
                <img src="/whatsapp.svg" alt="" />
                ENTRAR
              </div>
            </Link>
          </UI>
        </Modal>
      ) : null}
      <header>
        <div className="navbar">
          <img src="/PURNAT.svg" alt="PURNAT" />
        </div>
        <div className="hero">
          <div className="col" id="col-1">
            <div className="info">
              <div className="item" id="i-1">
                <img src="/calendar.svg" alt="" />
                Sábados
              </div>
              <div className="item" id="i-2">
                <img src="/clock.svg" alt="" />
                9h
              </div>
              <div className="item" id="i-3">
                <img src="/wifi.svg" alt="" />
                Online e Gratuitas!
              </div>
            </div>
            <p>
              Aulas de Yoga para iniciantes ao vivo a partir do dia 22 de
              outubro no canal da purnat no Youtube.
            </p>
            <form className="form" onSubmit={e => handleSubmit(e)}>
              <input
                className="input"
                type="email"
                placeholder="seu email mais organizado ;D"
              />
              <button className="button" type="submit">
                VEM COM A GENTE!
              </button>
            </form>
          </div>
          <div className="col" id="col-2">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/rOEMHy0SNMg"
              title="Purnat"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="professora">
            <div className="col" id="foto-col">
              <img src="/OMJ_8039.jpg" alt="" />
            </div>
            <div className="col" id="professora-col">
              <div className="infos">
                <div className="sobre">sobre a professora</div>
                <div className="info">HELLEN LIMA</div>
              </div>
              <p className="texto-sobre">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="imagens">
            <div className="imagem-1">
              <div className="purnat">
                <img src="/PURNAT.svg" alt="PURNAT" />
                <h1>Yogawear com propósito</h1>
              </div>
              <img id="imagem-1" src="/image00067.jpeg" alt="" />
            </div>
            <div className="grid-imagens">
              <img className="imagem-2" src="/OMJ_8133.jpg" alt="" />
              <img className="imagem-3" src="/OMJ_8586.jpg" alt="" />
              <img className="imagem-4" src="/1118.jpg" alt="" />
              <img className="imagem-5" src="/OMJ_8129.jpg" alt="" />
            </div>
          </div>
          <p className="proposito">
            Nosso propósito é espalhar boas energias por aí! Com autoamor,
            consciência ambiental, social, energia e tecnologia para você!
            <br />
            <strong>Vamos juntos?!</strong>
          </p>
        </div>
      </main>
      <footer>
        <div className="footer">
          <Link href="https://purnat.com.br/">
            <div className="loja">Nossa Loja</div>
          </Link>
          <img className="footer-purnat" src="/PURNAT.svg" alt="PURNAT" />
          <div className="redes">
            <Link href="https://www.instagram.com/purnat.br/">
              <div className="instagram">
                <img id="instagram-icon" src="/instagram.svg" alt="" />
              </div>
            </Link>
            <Link href="https://purnat.com.br/blogs/espalhando-conhecimento-purnat">
              <div className="blog">Blog</div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
