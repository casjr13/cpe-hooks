import { createContext, Dispatch } from 'react';
import { GlobalState, initialState } from './Reducer';
import { Action } from './Reducer/actions';

export type GlobalContextType = {
  state: GlobalState,
  dispatch: Dispatch<Action>,
};

export const defaultContext: GlobalContextType = {
  state: initialState,
  dispatch: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(defaultContext);

export { default as GlobalContextProvider } from './GlobalContextProvider';
