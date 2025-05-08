import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { ThemeProvider } from './components/theme-provider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider defaultTheme="system" storageKey="boostem-theme">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
)
