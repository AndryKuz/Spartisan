
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from './components/App/App.jsx'
import './assets/styles/index.scss';

import { store } from "./components/App/store.js";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


