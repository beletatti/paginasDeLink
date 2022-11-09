import './login.css';

import { useState } from 'react';
import {auth} from '../../services/firebaseConnection'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        if (email === '' || password === '') {
            alert("Preencha todos os campos!")
            return;
        } 

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("Bem-vindo !!!")
            navigate("/admin", {replace: true })
        })
        .catch(() => {
            toast.error("Erro ao tentar fazer o login!")
        })
    }

    return(
        <div className='login-container'>
            <Logo />

            <form className='form' onSubmit={handleLogin}>
               <Input 
                type='email' 
                placeholder='Digite seu e-mail...' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
               />
                <Input type='password' 
                 placeholder='********' 
                 autoComplete='on'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />


                <button type='submit'>Acessar</button>
            </form>
        </div>
    )
}