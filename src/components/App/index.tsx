import { useRef } from 'react';
import { Navigation, ResponsiveBackground } from 'components';
import { GlobalContextProvider } from 'core/GlobalContext';
import FancyInput, { FancyInputRef } from 'components/FancyInput';

const App = () => {
  const ref = useRef<FancyInputRef>(null);

  const click = () => {
    if (!ref.current) return;
    ref.current.focus();
    ref.current.placeholder("I'm focused!");
  }
  return (
    <GlobalContextProvider>
      <ResponsiveBackground />
      <Navigation />
      <div
        style={{
          display: 'flex',
          padding: 64,
          flexFlow: 'column nowrap',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <FancyInput ref={ref} />
        <button onClick={click} style={{ marginTop: 16 }}>
          Focus on the input!
        </button>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
