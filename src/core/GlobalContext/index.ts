import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

export type GlobalContextType = {
  lightMode: boolean;
  changeLightMode?: Dispatch<SetStateAction<boolean>>;
};

export const defaultGlobal: GlobalContextType = {
  lightMode: false,
  changeLightMode: undefined,
};

export const GlobalContext = createContext<GlobalContextType>(defaultGlobal);

export { default as GlobalContextProvider } from './GlobalContextProvider';
