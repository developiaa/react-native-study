import React from 'react';
import {SafeAreaView} from 'react-native';

import IndexScreen from './src/screens/IndexScreen';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <IndexScreen />
    </SafeAreaView>
  );
};

export default App;
