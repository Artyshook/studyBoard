import './App.css'
import { Layout } from './components/Layout'
import { createGlobalStyle } from 'styled-components'
import { theme } from './helpers/theme'

function App() {
  return (
    <div>
      <Layout />
      <GlobalStyle />
    </div>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: ${theme.background.backgroundColor};
    font-family: 'Montserrat', sans-serif;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  html {
    font-size: 85%;
  }
`
