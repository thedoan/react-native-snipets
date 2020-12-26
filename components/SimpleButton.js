import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const SimpleButton = (props) => {
  return (
	 <TouchableOpacity onPress={props.onPress}>
    <View>
      <Text>{props.customText || 'Simple Button'}</Text>
    </View>
	 </TouchableOpacity>
  );
}
export default SimpleButton;
