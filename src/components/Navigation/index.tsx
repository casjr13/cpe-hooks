import { useContext } from "react";
import { GlobalContext } from "core/GlobalContext";
import Button from "./Button";

const Navigation = () => {
  const {lightMode: light} = useContext(GlobalContext);

  return (
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
      <Button />
    </nav>
  );
}

export default Navigation;