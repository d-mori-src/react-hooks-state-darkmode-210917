import { ThemeContextProvider } from './store/Theme';
import { Theme } from './components/Theme';

const App = () => {
  return (
    <ThemeContextProvider>
      <Theme />
    </ThemeContextProvider>
  );
}

export default App;
