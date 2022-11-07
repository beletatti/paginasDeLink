import './home.css'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Home() {
    return (
        <div className= 'home-container'>
            <h1>DevBeletatti</h1>
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
            </main>
        </div>
    )
}