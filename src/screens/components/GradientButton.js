import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function GradientButton(props) {
  return (
    <LinearGradient
        colors={['rgba(9, 181, 211, 0.9)', 'rgba(58, 131, 244,0.9)']}
        end={{x:1, y:1}}
        start={{x: 0.1, y: 0.2}}
        style={styles.tabs}
    >
        <TouchableOpacity >
            <Text className="text-white font-bold">
                {props.value}
            </Text>
        </TouchableOpacity>

    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    text: {
      fontWeight: '800',
    },
    tabs:{
      padding: 10, 
      paddingLeft: 10,
      paddingRight:10,
      borderRadius: 50,
      marginRight: 10,
    }
  });
  