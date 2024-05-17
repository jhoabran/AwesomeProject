
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { _signInWithGoogle } from './src/config/firebase/GoogleSignIn';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [user,setUser] = useState()
  async function googleSignInTest (){
    _signInWithGoogle().then(data => {
      if(!data){
        console.log('No data')
        return
      }
      console.log(data)
      setUser(data.user.givenName + data.user.familyName)
    })
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.sectionContainer}>
      <TouchableOpacity
        onPress={() => googleSignInTest()}
      >
        <Text>Google sign in</Text>

      </TouchableOpacity>

      {user &&
      <Text>Hello {user}</Text>
      }
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
