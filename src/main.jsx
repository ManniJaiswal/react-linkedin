import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider} from 'react-router-dom'
import Router from './router/routes.jsx'

createRoot(document.getElementById('root')).render(
 <Router/>
)
