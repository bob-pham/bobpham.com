import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import matrix from '../javascript/matrix.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {setTimeout(matrix, 100)}
  </React.StrictMode>
)
