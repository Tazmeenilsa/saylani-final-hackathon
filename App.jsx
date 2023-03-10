import React from 'react';
import {NativeBaseProvider, Text, Box} from 'native-base';

import {StyleSheet} from 'react-native';
import Navigation from './src/navigations/Index';

function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
