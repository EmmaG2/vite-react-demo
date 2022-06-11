import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from './assets/derxjs-react-logo.png'

import { AnimatedLogo } from './componentes/styledComponents/AnimatedLogo'
import { UseOneCounterHook } from './hooks/UseOneCounterHook'
import './sass/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='Main'>
      <UseOneCounterHook />
    </main>
    <AnimatedLogo src={logo} />
  </React.StrictMode>
)
