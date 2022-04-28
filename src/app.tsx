import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>This app is using the dark mode 1</main>
      <Button variant="contained">Button</Button>
    </ThemeProvider>
  );
}

export default App;