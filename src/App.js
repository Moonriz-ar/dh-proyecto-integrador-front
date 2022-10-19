import { ThemeProvider } from 'styled-components';

import theme from './theme';

import { Title } from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1 className="text-5xl font-bold underline">Hello world!!!</h1>
      <h1>Heading 1</h1>
      <Title>Styled title</Title>
    </ThemeProvider>
  );
}

export default App;
