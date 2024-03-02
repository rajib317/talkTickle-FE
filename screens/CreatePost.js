import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import CloseButton from '../components/CloseButton';
import CreatePostDock from '../components/CreatePostDock';

export default function CreatePost({ close }) {
  return (
    <View behavior='padding' style={styles.container}>
      <View style={styles.header}>
        <CloseButton style={styles.closeButton} onPress={close} />
        <Text style={styles.title}>Tickles</Text>
        <Button title='Post' />
      </View>
      <KeyboardAvoidingView
        style={styles.writeArea}
        behavior='padding'
        keyboardVerticalOffset={20}
      >
        <TextInput multiline placeholder="Write what's on your mind" />
      </KeyboardAvoidingView>
      <CreatePostDock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    columnGap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    flexGrow: 1,
  },
  closeButton: {
    fontWeight: '700',
  },
  writeArea: {
    padding: 20,
    flexGrow: 1,
    textAlignVertical: 'top',
  },
});
