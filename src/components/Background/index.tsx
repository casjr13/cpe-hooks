import { useContext } from 'react';
import { GlobalContext } from 'core/GlobalContext';
import useResponsiveLightDarkThemedBackgrounds from 'hooks/useResponsivedLightDarkThemedBackground';

// Light
import lightPortrait from './ThisChristography-20201010-3.jpg';
import lightLandscape from './ThisChristography-20210524.jpg';

// Dark
import darkPortrait from './ThisChristography-20200912-12.jpg';
import darkLandscape from './ThisChristography-20190703.jpg';

const ResponsiveBackground = () => {
  const { state: { image } } = useContext(GlobalContext);

  useResponsiveLightDarkThemedBackgrounds({
    portrait: lightPortrait,
    landscape: lightLandscape,
  }, {
    portrait: darkPortrait,
    landscape: darkLandscape,
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
        zIndex: -1,
      }}
    />
  );
};

export default ResponsiveBackground;