import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import SlideButton from './component/slideButton';
import App from './App';
import {ContextFunction} from './ContextFunction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextFunction>
        <App />
    </ContextFunction>
);
