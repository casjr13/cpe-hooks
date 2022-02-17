import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from 'core/GlobalContext';
import { updateImage } from 'core/GlobalContext/Reducer/actions';

// Light
import lightPortrait from './ThisChristography-20201010-3.jpg';
import lightLandscape from './ThisChristography-20210524.jpg';

// Dark
import darkPortrait from './ThisChristography-20200912-12.jpg';
import darkLandscape from './ThisChristography-20190703.jpg';

const ResponsiveBackground = () => {
  const { state: { light, image }, dispatch } = useContext(GlobalContext);
  const [portrait, setPortrait] = useState<string>("");
  const [landscape, setLandscape] = useState<string>("");

  const handleResize = () => {
    // Aspect ratio: height / width
    const ratio = window.innerHeight / window.innerWidth;
    const newImage = ratio > 1 ? portrait : landscape;
    if (newImage !== image) {
      dispatch(updateImage(newImage));
    }
  }

  useEffect(() => {
    setPortrait(light ? lightPortrait : darkPortrait);
    setLandscape(light ? lightLandscape : darkLandscape);
  }, [light])

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  });

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default ResponsiveBackground;