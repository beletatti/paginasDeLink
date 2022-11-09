import './home.css'

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import  { Social } from '../../components/Social';

export default function Home() {
    return (
        <div className= 'home-container'>
          <h1>Richard Beletatti</h1>
            <span>Veja meus links 👇</span>
           
           <main className='links'>
                <section className='link-area'>
                    <a href="https://github.com/beletatti"><p className='link-text'> Todos os meus projetos [código]</p></a>
                </section>

                <section className='link-area'>
                    <a href="https://twitter.com/Dev_Beletatti"><p className='link-text'>Constatar serviço</p></a>
                </section>

                <section className='link-area'>
                    <a href="https://www.linkedin.com/in/richard-beletatti-527670143/"><p className='link-text'>Apoia-se</p></a>
                </section>
           
            <footer>
                <Social url="https://www.facebook.com/richard.bas.9">
                    <FaFacebook size={35} color="#fff" />
                </Social>

                <Social url="https://www.instagram.com/richaobeletatti">
                    <FaInstagram size={35} color="#fff" />
                </Social>

                <Social url="https://www.youtube.com/channel/UC9BjseYAW45So5ieNn6lf1g">
                    <FaLinkedin size={35} color="#fff" />
                </Social>
            </footer>
            </main>
        </div>
    )
}