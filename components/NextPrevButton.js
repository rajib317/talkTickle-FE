import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../constants/colors';

export default function NextPrevButton({
  onPress,
  loading,
  type,
  styles,
  backgroundColor,
  color,
  size,
}) {
  return (
    <>
      <Pressable
        style={[
          stl.next,
          styles,
          { backgroundColor, color, padding: (size === 'sm' && 10) || 20 },
        ]}
        onPress={onPress}
      >
        <Icon styles={stl.next} name={type} />
      </Pressable>
      {loading && <Icon styles={stl.next} name='loading1' />}
    </>
  );
}

const stl = StyleSheet.create({
  next: {
    borderRadius: 100,
    fontSize: 20,
    textAlign: 'center',
    elevation: 3,
  },
});
