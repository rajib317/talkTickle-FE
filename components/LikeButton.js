import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountFormat from './CountFormat';

export default function LikeButton({ onPress, count }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setlikesCount] = useState(count);
  return (
    <View style={styles.container}>
      <Icon
        name={liked ? 'heart' : 'heart-o'}
        color={liked ? 'red' : '#ccc'}
        size={20}
        onPress={() => {
          if (onPress) onPress();
          setLiked((val) => {
            let c = likesCount;
            val ? c-- : c++;
            setlikesCount(c);
            return !val;
          });
        }}
      />
      <CountFormat count={likesCount} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 5,
  },
});
