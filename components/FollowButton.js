import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Pressable } from 'react-native';
import Button from './Button';
import colors from '../constants/colors';

export default function FollowButton({ isFollowing, color, textColor }) {
  const [follow, setFollow] = useState(isFollowing);

  return (
    <Pressable
      style={{ alignSelf: 'flex-start', opacity: !follow ? 1 : 0.5 }}
      onPress={() => {
        setFollow((val) => !val);
      }}
    >
      <Button color={colors.primary} textColor='white' size='xs' roundCorner>
        {!follow ? 'Follow' : 'Following'}
      </Button>
    </Pressable>
  );
}
