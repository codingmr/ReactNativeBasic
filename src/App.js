import React from 'react';
import Root from './containers/Root';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Root />;
};

export default App;
