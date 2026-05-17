import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css' // ここでTailwind CSSを読み込みます
import 'katex/dist/katex.min.css'
import ScreenManager from './ScreenManager.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScreenManager />
  </React.StrictMode>,
)