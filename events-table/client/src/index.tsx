import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {Provider} from "react-redux"
import store from "./store"
import ThemeProvider from "./components/Theme"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <ThemeProvider>

                    <App/>

            </ThemeProvider>
        </React.StrictMode>
    </Provider>
);

reportWebVitals()
