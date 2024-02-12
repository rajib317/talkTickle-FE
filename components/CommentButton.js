import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import CountFormat from './CountFormat';

export default function CommentButton({ onPress, count }) {
  return (
    <View style={styles.container}>
      <Icon name='comment' color='#ccc' size={18} onPress={onPress} />
      <CountFormat count={count} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 5,
  },
});
