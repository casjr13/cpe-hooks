import { Navigation, ResponsiveBackground } from 'components';
import { GlobalContextProvider } from 'core/GlobalContext';

const App = () => (
  <GlobalContextProvider>
    <ResponsiveBackground />
    <Navigation />
  </GlobalContextProvider>
);

export default App;
