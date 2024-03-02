import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

export default function CloseButton({ onPress, style, color }) {
  return (
    <Pressable style={style} onPress={onPress}>
      <Icon name='close-a' color={color || 'black'} size={18} />
    </Pressable>
  );
}
