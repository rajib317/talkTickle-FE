import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountFormat from './CountFormat';
import { Pressable } from 'react-native';
import colors from '../constants/colors';

export default function LikeButton({ onPress, count }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setlikesCount] = useState(count);
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (onPress) onPress();
        setLiked((val) => {
          let c = likesCount;
          val ? c-- : c++;
          setlikesCount(c);
          return !val;
        });
      }}
    >
      <Icon
        name={liked ? 'heart' : 'heart-o'}
        color={liked ? 'red' : colors.grey}
        size={20}
      />
      <CountFormat count={likesCount} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 5,
  },
});
