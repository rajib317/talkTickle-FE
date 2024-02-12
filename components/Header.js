import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import NotificationIcon from './NotificationIcon';
export default Posts = () => {
  const notification = () => {
    alert('notification');
  };
  const edit = () => {
    alert('edit');
  };
  return (
    <View style={styles.header}>
      <View style={{ flexGrow: 1, alignItems: 'center' }}>
        <Image style={styles.icon} source={require('../assets/favicon.png')} />
      </View>
      <View style={styles.iconArea}>
        <NotificationIcon count={200} onPress={notification} />
        <Icon name='pencil' size={40} onPress={edit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  iconArea: {
    position: 'absolute',
    flexDirection: 'row',
  },
  icon: {
    height: 30,
    width: 38,
  },
});
