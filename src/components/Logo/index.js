import './logo.css';

import { Link } from 'react-router-dom';

export function Logo(){
    return (
        <Link to='/'>
        <h1 className='logo'>Richard<span className='logo-text'>Beletatti</span></h1>
        </Link>
    )
}