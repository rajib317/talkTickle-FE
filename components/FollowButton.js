import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Pressable } from 'react-native';

export default function FollowButton({ isFollowing }) {
  const [follow, setFollow] = useState(isFollowing);

  return (
    <Pressable
      style={{ alignSelf: 'flex-start', opacity: !follow ? 1 : 0.5 }}
      onPress={() => {
        setFollow((val) => !val);
      }}
    >
      <Text style={styles.followBtn}>{!follow ? 'Follow' : 'Following'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  followBtn: {
    backgroundColor: '#00a8ff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
