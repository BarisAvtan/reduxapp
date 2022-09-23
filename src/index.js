import { React,StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/root/App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "react-redux"
import configureStore from "./redux/reducers/configureStore"
import { createRoot } from "react-dom/client"
//root
const store = configureStore();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
