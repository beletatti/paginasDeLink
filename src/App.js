import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Admin from './pages/Admin';
import Error from './pages/Error';
import Networks from './pages/Networks';

import Private from './routes/Private';

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
    element: <Private> <Admin /> </Private>
   },
   {
    path: '/admin/social',
    element: <Private> <Networks /> </Private>
   },
   {
    path :'/*',
    element: <Error />
   }
])


export { router };