import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App1 from './App1.jsx'

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/fc' element={<App1/>} />
        </Routes>
    </HashRouter>
)
