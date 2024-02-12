import { View, Image, StyleSheet } from 'react-native';
export default function Splash() {
  return (
    <>
      <View style={styles.container}>
        <Image source={require('../assets/icon.png')} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
