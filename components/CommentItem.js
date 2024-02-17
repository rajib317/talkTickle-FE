import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

export default function CommentItem({ username, originalText, correctedText }) {
  return (
    <View>
      <Pressable onPress={() => alert('user portfolio')}>
        <Text style={styles.username}>{username}</Text>
      </Pressable>
      <Text
        style={{
          color: correctedText ? colors.wrong : 'black',
          textDecorationLine: correctedText ? 'line-through' : 'none',
        }}
      >
        {originalText}
      </Text>
      {correctedText && <Text style={styles.corrected}>{correctedText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  username: {
    color: colors.primary,
  },
  original: {
    color: colors.primary,
  },
  corrected: {
    color: colors.corrected,
  },
});
