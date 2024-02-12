import { ScrollView, Text, StyleSheet } from 'react-native';
import { navItems } from '../constants/staticValues';

export default function Nav() {
  return (
    <ScrollView style={styles.nav} horizontal={true}>
      {navItems.map((item) => (
        <Text key={item} style={styles.navItem}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  nav: {
    paddingVertical: 10,
  },
  navItem: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
