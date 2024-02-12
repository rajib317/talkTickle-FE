import { StyleSheet, View } from 'react-native';

export default function CardBottom({ children, styles }) {
  return <View style={[stl.cardBottom, styles ? styles : []]}>{children}</View>;
}

const stl = StyleSheet.create({
  cardBottom: {
    borderTopColor: '#eee',
    borderTopWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
  },
});
