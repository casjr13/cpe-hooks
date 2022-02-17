import { GlobalContext } from "core/GlobalContext"
import { toggleTheme } from "core/GlobalContext/Reducer/actions";
import { useContext } from "react"

const Button = () => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <button onClick={() => dispatch(toggleTheme())}>Change Theme</button>
  )
};

export default Button;


// const Button = () => {
//   const { lightMode, changeLightMode } = useContext(GlobalContext);
//
//   if (!changeLightMode) {
//     throw new Error("Change Light Mode is undefined");
//   }
//
//   return (
//     <button onClick={() => changeLightMode(!lightMode)}>Change Theme</button>
//   )
// };




// const Button = () => (
//   <GlobalContext.Consumer>
//     {({ lightMode, changeLightMode }) => {
//       if (!changeLightMode) {
//         throw new Error("Change Light Mode is undefined");
//       }
//       return (
//         <button onClick={() => changeLightMode(!lightMode)}>Change Theme</button>
//       )
//     }}
//   </GlobalContext.Consumer>
// );