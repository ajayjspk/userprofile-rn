
import { Text, SafeAreaView,View } from 'react-native'
import React from 'react';
import Profile from './src/screens/Profile';
import Posts from './src/screens/Posts';
import Navigation from './src/screens/Navigation' 

const App = () => {
  return (
    <SafeAreaView>
{/* <Profile/> */}
<Posts/>
      {/* <Navigation/> */}
    </SafeAreaView>
  )
}
export default App;


