import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateCard } from './pages/CreateCard'
import { ThemeProvider } from '@mui/material'
import { blue } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: blue,
  },
  typography: {
    fontFamily: 'Lora',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CreateCard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#fefefe',
//     },
//     secondary: blue,
//   },
//   typography: {
//     fontFamily: 'Lora',
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 700,
//   },
// })

// const GlobalStyle = createGlobalStyle`
//   body {
//     box-sizing: border-box;
//     background-color: ${theme.background.backgroundColor};
//     font-family: 'Montserrat', sans-serif;
//     -ms-overflow-style: none;
//   }
//   body::-webkit-scrollbar {
//     display: none;
//   }
// `
