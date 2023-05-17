import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

console.log('👋 This message is being logged by "renderer.js", included via webpack');
