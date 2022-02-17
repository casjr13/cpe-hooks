import { Dispatch, SetStateAction } from "react";

interface Props {
  light: boolean,
  changeLight: Dispatch<SetStateAction<boolean>>
}

const Navigation = ({ light, changeLight }: Props) => (
  <nav
    style={{
      backgroundColor: light ? '#efefef' : '#121212',
      color: light ? '#121212' : '#efefef',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 64,
    }}
  >
    Shutup, Block-K.
    <button onClick={() => changeLight(!light)}>Change Theme</button>
  </nav>
);

export default Navigation;