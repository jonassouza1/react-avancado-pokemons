import { ThemeProvider } from './contexts/theme-context';

import { AppRoutes } from './pages/routes';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import styled, { createGlobalStyle } from 'styled-components';


function App() {
  return (
    <Container>
      <GlobalStyle />
      <ThemeProvider>
        <ThemeTogglerButton />
        <AppRoutes />
      </ThemeProvider>
    </Container>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
img{
  max-width:100%;
}
`
const Container = styled.section`
display:flex;
min-height:100vh;
p{
  font-family: 'Roboto', sans-serif;
  font-weight:500;
  font-size:14px;
}
`

export default App;
