import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import Splash from './screens/Splash';
import Posts from './screens/Posts';
export default function () {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <View style={styles.container}>
        {/* <Splash /> */}
        <Posts />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
