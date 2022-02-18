import { useState, useEffect, useContext } from "react";
import { GlobalContext, updateImage } from "core/GlobalContext";

export type Backgrounds = {
  portrait: string,
  landscape: string,
}

const useResponsiveLightDarkThemedBackground = (
  lightBGs: Backgrounds,
  darkBGs: Backgrounds,
) => {
  const { state: { light, image }, dispatch } = useContext(GlobalContext);
  const [BGs, setBGs] = useState<Backgrounds>({
    portrait: "",
    landscape: "",
  });

  const handleResize = () => {
    // Aspect ratio: height / width
    const ratio = window.innerHeight / window.innerWidth;
    const newImage = ratio > 1 ? BGs.portrait : BGs.landscape;
    if (newImage !== image) {
      dispatch(updateImage(newImage));
    }
  }

  useEffect(() => {
    setBGs(light ? lightBGs : darkBGs);
  }, [light, lightBGs, darkBGs])

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  });
};

export default useResponsiveLightDarkThemedBackground;