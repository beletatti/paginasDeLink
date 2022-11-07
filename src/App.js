import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Admin from './pages/Admin';

import Error from './pages/Error';

const router = createBrowserRouter([
   {
    path: '/',
    element: <Home />
   },
   {
    path: '/login',
    element: <LogIn />
   },
   {
    path: '/admin',
    element: <Admin />
   },
   {
    path :'/*',
    element: <Error />
   }
])


export { router };