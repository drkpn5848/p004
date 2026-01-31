import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App1 from './App1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename='p004'>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/fc' element={<App1/>} />
        </Routes>
    </BrowserRouter>
);