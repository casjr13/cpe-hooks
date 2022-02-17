import { useReducer } from 'react';
import { PropsWithChildren } from 'react';
import { GlobalContext } from './';
import { initialState, reducer} from './Reducer';

interface Props { }

const GlobalContextProvider = ({ children }: PropsWithChildren<Props>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;