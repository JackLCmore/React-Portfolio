import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Error from './components/pages/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About/>,
            },
            {
                path: "/Portfolio",
                element: <Portfolio/>
            },
            {
                path: "/Contact",
                element: <Contact/>
            },
            {
                path: "/Resume",
                element: <Resume/>
            },
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
