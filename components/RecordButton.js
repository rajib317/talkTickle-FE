import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RecordButton({ onPress, color }) {
  return (
    <Pressable onPress={onPress}>
      <Icon style={{ color }} name='microphone' size={20} />
    </Pressable>
  );
}
const styles = StyleSheet.create({});
