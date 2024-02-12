import { StyleSheet, View } from 'react-native';

export default function Card({ children, style }) {
  return <View style={[styles.card, { ...style }]}>{children}</View>;
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    elevation: 2,
    padding: 10,
    borderRadius: 5,
  },
});
