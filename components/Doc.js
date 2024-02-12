import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { docItems } from '../constants/staticValues';

export default function Doc() {
  return (
    <View style={styles.doc}>
      {docItems.map((item) => (
        <Pressable
          onPress={() => alert(`${item.title}`)}
          style={styles.docItem}
          key={item.title}
        >
          <Icon name={item.icon} size={25} />
          <Text>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  doc: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  docItem: {
    alignItems: 'center',
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
});
