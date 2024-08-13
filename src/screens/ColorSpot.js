import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react';
import {getImageColors} from 'react-native-image-colors';

const ColorSpot = () => {
    const [bgColor, setBgColor] = useState('#000');

    useEffect(() => {
      const fetchColors = async () => {
        const result = await getImageColors('https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600', {
          fallback: '#000',
          quality: 'low',
        });
  
        setBgColor(result.average || '#000');
      };
  
      fetchColors();
    }, []);

  return (
    <View  style={{backgroundColor: bgColor}}>
      <Text>ColorSpot</Text>
    </View>
  )
}

export default ColorSpot

const styles = StyleSheet.create({})