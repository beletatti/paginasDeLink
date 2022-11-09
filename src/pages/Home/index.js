import './home.css'

import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import  { Social } from '../../components/Social';

export default function Home() {
    return (
        <div className= 'home-container'>
          <h1>Richard Beletatti</h1>
            <span>Veja meus links 👇</span>
           
           <main className='links'>
                <section className='link-area'>
                    <a href="https://github.com/beletatti"> <AiFillGithub className='iconOfText'/><p className='link-text'>GitHub</p></a>
                </section>

                <section className='link-area'>
                    <a href="https://twitter.com/Dev_Beletatti"><AiFillTwitterCircle className='iconOfText'/><p className='link-text'>Twitter</p></a>
                </section>

                <section className='link-area'>
                    <a href="https://www.linkedin.com/in/richard-beletatti-527670143/"><AiFillLinkedin className='iconOfText'/><p className='link-text'>Linkedin</p></a>
                </section>
           
            <footer>
                <Social url="https://www.facebook.com/richard.bas.9">
                    <FaFacebook size={35} color="#fff" />
                </Social>

                <Social url="https://www.instagram.com/richaobeletatti">
                    <FaInstagram size={35} color="#fff" />
                </Social>

                <Social url="https://www.youtube.com/channel/UC9BjseYAW45So5ieNn6lf1g">
                    <FaYoutube size={35} color="#fff" />
                </Social>
            </footer>
            </main>
        </div>
    )
}