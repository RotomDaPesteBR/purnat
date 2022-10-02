// import { lighten } from 'polished';
import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Avenir Book';
    src: url('/fonts/Avenir Book.otf');
  }
  @font-face {
    font-family: 'Avenir Heavy';
    src: url('/fonts/Avenir Heavy.ttf');
  }
  @font-face {
    font-family: 'Avenir Roman';
    src: url('/fonts/Avenir Roman.otf');
  }

  html {
    @media (max-width: 1300px){
      font-size: 12px;
    }
    @media (max-width: 1100px){
      font-size: 10px;
    }
    @media (max-width: 900px){
      font-size: 8px;
    }
    @media (max-width: 800px){
      font-size: 16px;
    }
    @media (max-width: 700px){
      font-size: 14px;
    }
    @media (max-width: 600px){
      font-size: 12px;
    }
    @media (max-width: 600px){
      font-size: 12px;
    }
    @media (max-width: 500px){
      font-size: 10px;
    }
    @media (max-width: 400px){
      font-size: 8px;
    }
    @media (max-width: 350px){
      font-size: 7px;
    }
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Avenir Roman', sans-serif;

  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.text};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => darken(0.1, theme.background)};
  }

  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font: 400 1rem 'Avenir Roman', sans-serif;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0;
  }

  img{
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .navbar {
    display: flex;
    padding: 4.25%;
    box-shadow: inset 0px 4px 50px 10px rgba(80, 85, 104, 0.05);
  }

  .navbar img {
    height: 6.25rem;
  }

  .hero{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 4.5%;
    flex-wrap: wrap-reverse;
    @media (max-width: 1440px){
      padding: 1%;
    }
    @media (max-width: 800px){
      padding: 5%;
    }
  }

  .hero .col {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: inherit;
    padding: 2.5%;

    @media (max-width: 800px){
      width: 100%;
    }
  }

  #col-1 {
    @media (max-width: 800px){
      height: 100%;
      margin-top: 2.5rem;
    }
  }

  #col-2 {
    @media (max-width: 800px){
      height: 52.5vh;
    }
    @media (max-width: 700px){
      height: 45vh;
    }
    @media (max-width: 600px){
      height: 40vh;
    }
    @media (max-width: 500px){
      height: 33vh;
    }
    @media (max-width: 425px){
      height: 28vh;
    }
    @media (max-width: 375px){
      height: 25vh;
    }
    @media (max-width: 320px){
      height: 21.5vh;
    }
  }

  .info {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .info .item {
    padding: 1rem;
    background: ${({ theme }) => theme.secondary};
    border: 0;
    border-radius: 3.75rem;
    width: auto-fit;
    font-size: 1.625rem;
    margin: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }

  #i-1{
    flex-grow: 1;
  }

  #i-2{
    flex-grow: 1;
  }

  #i-3{
    flex-grow: 1;
  }

  .info .item img{
    height: 2.5rem;
    width: auto;
    margin-bottom: 0.2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .hero .form {
    width: 100%;
  }
  
  .hero .input {
    width: 100%;
    padding: 1rem;
    color: ${({ theme }) => theme.text};
    border-style: solid;
    border-width: 2px;
    border-color: #50556880;
    border-radius: 3.75rem;
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  ::placeholder {
    color: #50556880;
  }


  .hero p {
    font-size: 2rem;
    text-align: justify;
    padding: 0.25rem;
    margin-bottom: 1.5rem;
  }

  .hero .button {
    width: 100%;
    padding: 1rem;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textDark};
    border: 0;
    border-radius: 3.75rem;
    font-size: 2.25rem;
  }

  .video {
    width: 100%;
    height: 100%;
  }

  .obrigado {
    display: flex;
    justify-content: center;
    padding: 2rem;
    font-size: 1.5rem;
    @media (max-width: 800px){
      padding: 0;
    }
  }

  .star-1 {
    position: relative;
    height: 4rem;
    right: 100px;
    @media (max-width: 800px){
      right: 50px;
    }
    @media (max-width: 425px){
      right: 20px;
    }
  }
  
  .star-2 {
    position: relative;
    height: 5rem;
    bottom: 40px;
    left: 120px;
    @media (max-width: 800px){
      bottom: 30px;
      left: 40px;
    }
    @media (max-width: 425px){
      bottom: 30px;
      left: 20px;
    }
  }

  .aviso {
    width: 50%;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
    margin-bottom: 5rem;
    @media (max-width: 1500px){
      padding: 0;
    }
    @media (max-width: 800px){
      margin-bottom: 1rem;
    }
  }

  .invite {
    width: 70%;
    border-radius: 3.75rem;
    padding: 3rem;
    font-size: 1.5rem;
    text-align: center;
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.textDark};
    @media (max-width: 800px){
      width: 80%;
    }
  }

  .whatsapp-button {
    position: relative;
    bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 20rem;
    padding: 1rem;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textDark};
    border: 0;
    border-radius: 3.75rem;
    font-size: 2.25rem;
    text-align: center;
    cursor: pointer;
    @media (max-width: 1200px){
      bottom: 30px;
    }
    @media (max-width: 1100px){
      bottom: 27.5px;
    }
    @media (max-width: 1000px){
      bottom: 25px;
    }
    @media (max-width: 900px){
      bottom: 22.5px;
    }
    @media (max-width: 800px){
      bottom: 40px;
      font-size: 2rem;
      width: 15rem;
    }
    @media (max-width: 425px){
      bottom: 25px;
    }
    @media (max-width: 375px){
      bottom: 20px;
    }
    @media (max-width: 320px){
      bottom: 17.5px;
    }
  }

  .whatsapp-button img{
    height: 2.5rem;
    width: auto;
    margin-bottom: 0.2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    @media (max-width: 800px){
      height: 2rem;
    }
  }

  .professora {
    display: flex;
    flex-direction: row;
    padding: 5%;
    flex-wrap: wrap-reverse;
    background-image: url('/background-top.svg');
    background-repeat: no-repeat;
    background-position: 50% -75%;
    @media (max-width: 1100px) {
      background-position: 50% -40%;
    }
    @media (max-width: 900px) {
      background-position: 50% -30%;
    }
    @media (max-width: 800px) {
      background: url('/background-top.svg'), linear-gradient(0, ${({
        theme
      }) => theme.secondary} 50%, #FFFFFF 50%);
      background-repeat: no-repeat;
      background-position: 50% 30%;
    }
    @media (max-width: 700px) {
      background-position: 50% 40%;
    }
    @media (max-width: 600px) {
      background-position: 50% 70%;
    }
    @media (max-width: 500px) {
      background-position: 50% -120%;
    }
    @media (max-width: 425px) {
      background-position: 50% -100%;
    }
    @media (max-width: 375px) {
      background-position: 50% -35%;
    }
    @media (max-width: 320px) {
      background-position: 50% -22.5%;
    }
  }

  .professora .col{
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 5%;
    justify-content: center;
    
    @media (max-width: 800px){
      width: 100%;
    }
  }

  .professora .col img{
    border-radius: 5rem;
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: 0 0%;
    @media (max-width: 800px){
      height: 100%;
    }
  }

  .professora .infos {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 3.75rem;
    font-size: 2.25rem;
    white-space: nowrap;
  }

  .professora .sobre {
    display: flex;
    width: 100%;
    padding: 1rem;
    padding-top: 0;
    font-size: 2rem;
    white-space: nowrap;
    color: #D9D9D9;
    text-align: justify;
    text-justify: auto;
  }

  .professora .info {
    display: flex;
    width: 100%;
    padding: 1rem;
    margin-bottom: 0;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textDark};
    border-radius: 3.75rem;
    font-size: 2.25rem;
    white-space: nowrap;
  }
  
  #professora-col {
    align-items: start;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .texto-sobre {
    height: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    @media (max-width: 1300px){
      font-size: 1.75rem;
    }
    @media (max-width: 1100px){
      font-size: 2rem;
    }
    @media (max-width: 1000px){
      font-size: 2.25rem;
    }
    @media (max-width: 900px){
      font-size: 2.5rem;
    }
    @media (max-width: 800px){
      font-size: 1.5rem;
    }
  }

  .imagens {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
  }

  .imagem-1 {
    position: relative;
    width: 50%;
    height: 80vh;
    @media (max-width: 800px){
      width: 100%;
    }
  }

  .imagem-1 .purnat {
    position: absolute;
    right: 10px;
    top: 10px; 
    color: #ffffff;
  }

  .imagem-1 .purnat img{
    height: 8rem;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(100deg) brightness(100%) contrast(100%);
  }

  .imagem-1 .purnat h1{
    font-size: 2.25rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  #imagem-1 {
    height: 80vh;
    object-fit: cover;
    object-position: center;
  }

  .grid-imagens {
    display: grid;
    grid-template-columns: auto auto;
    width: 50%;
    height: 80vh;
    gap: 0;
    @media (max-width: 800px){
      width: 100%;
    }
  }

  .grid-imagens img{
    height: 40vh;
    object-fit: cover;
    object-position: center;
  }

  

  .proposito {
    text-align: center;
    padding: 10rem;
    font-size: 2.25rem;
    background-image: url('/background-bottom.svg');
    background-repeat: no-repeat;
    background-position: 50% 100%;
    @media (max-width: 800px){
      padding: 5rem;
    }
  }

  .footer {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 100%;
    text-align: center;
    padding-left: 15%;
    padding-right: 15%;
    @media (max-width: 800px){
      padding-left: 5%;
      padding-right: 5%;
    }
  }

  .loja{
    width: calc(100% / 3);
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 2rem;
    background: ${({ theme }) => theme.text};
    color:  ${({ theme }) => theme.textDark};
    cursor: pointer;
    white-space: nowrap;
  }

  .footer .footer-purnat{
    height: 100%;
    padding: 1.5rem;
    width: 50%;
  }

  .footer .redes{
    display: grid;
    grid-template-columns: auto auto;
    width: calc(100% / 3);
    height: 100%;
    align-items: center;
    cursor: pointer;
    column-gap: 1rem;
    @media (max-width: 800px){
      column-gap: 0.5rem;
    }
  }

  .instagram{
    border-radius: 2rem;
    height: 3.8125rem;
    background: ${({ theme }) => theme.text};
    color:  ${({ theme }) => theme.textDark};}
    cursor: pointer;
  }

  #instagram-icon{
    height: 2.5rem;
    margin-top: 0.65rem;
    cursor: pointer;
  }

  .blog{
    padding: 1rem;
    font-size: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 2rem;
    background: ${({ theme }) => theme.text};
    color:  ${({ theme }) => theme.textDark};}
  }
`;
