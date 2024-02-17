import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import Splash from './screens/Splash';
import Posts from './screens/Posts';
import Login from './screens/Login';
export default function () {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <View style={styles.container}>
        {/* <Splash /> */}
        {/* <Posts /> */}
        <Login />
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
