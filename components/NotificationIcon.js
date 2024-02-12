import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
export default function NotificationIcon({ count, onPress }) {
  return (
    <View style={styles.container}>
      <Icon name='bell' size={40} onPress={onPress} />
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  count: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 100,
    minWidth: 20,
    color: 'white',
    right: 0,
    paddingHorizontal: 2,
    textAlign: 'center',
  },
});
