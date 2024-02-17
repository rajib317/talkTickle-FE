import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import CountFormat from './CountFormat';
import { Pressable } from 'react-native';
import colors from '../constants/colors';

export default function CommentButton({ onPress, count }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon name='comment' color={colors.grey} size={18} />
      <CountFormat count={count} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 5,
  },
});
