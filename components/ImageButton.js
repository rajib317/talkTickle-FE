import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ImgaeButton({ onPress, color }) {
  return (
    <Pressable onPress={onPress}>
      <Icon style={{ color }} name='image' size={20} />
    </Pressable>
  );
}
const styles = StyleSheet.create({});
