import { useState, useEffect } from 'react';
import './networks.css'

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { MdAddLink } from 'react-icons/md'

import { db } from '../../services/firebaseConnection';
import {setDoc, doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify' 

export default function Networks() {

    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");

    useEffect( () => {
        function loadLinks() {
            const docRef = doc(db, "social", "link")
             getDoc(docRef)
             .then( (snapshot) => {
                if(snapshot.data() !== undefined) {
                    setTwitter(snapshot.data().twitter)
                    setInstagram(snapshot.data().instagram)
                    setLinkedin(snapshot.data().linkedin)
                }
             })
        }

        loadLinks();
    }, [])

     function handleSave(e) {
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            twitter: twitter,
            instagram: instagram,
            linkedin: linkedin
        })
        .then(() => {toast.success("Salvo com sucesso!")})
        .catch((error) => {toast.error("Erro ao salvar!")})
    }

    return (
        <div>
            <div className='admin-container'>
                <Header />

                <h1 className='title-social'>Suas Redes Socias</h1>

                <form className='form' onSubmit={handleSave}>
                    <label className='label'>Link do Twitter</label>
                    <Input
                    placeholder="Digite a url do Twitter... "
                    value={twitter}
                    onChange={ (e) => setTwitter(e.target.value) }
                    />
                    <label className='label'>Link do Instagram</label>
                    <Input
                    placeholder="Digite a url do Instagram... "
                    value={instagram}
                    onChange={ (e) => setInstagram(e.target.value) }
                    />
                    <label className='label'>Link do Linkedin</label>
                    <Input
                    placeholder="Digite a url do Linkedin... "
                    value={linkedin}
                    onChange={ (e) => setLinkedin(e.target.value) }
                    />

                    <button type='submit' className='btn-register'>
                        Salvar links <MdAddLink size={24} color="#FFF" />
                    </button>
                </form>
            </div>
        </div>
    )
}