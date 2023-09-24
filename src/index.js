import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const rootTag = document.querySelector('#root');
const root = createRoot(rootTag);

root.render(
    <App />
);