import './index.css';
import App from './App';
import Modal from 'react-modal';
import ReactDOM from 'react-dom/client';

Modal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
