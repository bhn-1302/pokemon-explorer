import './App.css'
import { Home } from './components/home/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonDetail } from './components/home/PokemonDetail'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './components/context/ToggleTheme'

const GlobalStyle = createGlobalStyle`
* {
padding: 0;
margin: 0;
box-sizing: border-box;
}
`

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />     
      <ThemeProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pokemon/:name' element={<PokemonDetail />}/>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
