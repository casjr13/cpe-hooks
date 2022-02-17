import { PropsWithChildren, useState } from 'react';
import { GlobalContext } from './';

interface Props { }

const GlobalContextProvider = ({ children }: PropsWithChildren<Props>) => {
  const [light, setLight] = useState<boolean>(false);

  return (
    <GlobalContext.Provider 
      value={{
        lightMode: light,
        changeLightMode: setLight,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;