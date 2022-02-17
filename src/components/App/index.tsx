import { useState } from 'react';
import { Navigation, ResponsiveBackground } from 'components';

function App() {
  const [lightMode, setLightMode] = useState<boolean>(false);

  return (
    <>
      {lightMode && <ResponsiveBackground light={lightMode} />}
      <Navigation light={lightMode} changeLight={setLightMode} />
    </>
  );
}

export default App;
