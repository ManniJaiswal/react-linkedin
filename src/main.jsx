import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider} from 'react-router-dom'
import Router from './router/routes.jsx'
import {ToastContainer} from "react-toastify"

createRoot(document.getElementById('root')).render(
    <>
        <Router />
        <ToastContainer
                position="bottom                                                                                                                                                                -right"
                autoClose={3000}
                theme="colored"
            />
    </>
)
