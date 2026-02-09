import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { DataProvider } from './Context/ContextData.jsX'
createRoot(document.getElementById('root')).render(
<DataProvider>
     <App />
</DataProvider>    
       
   
       
   
 
)
