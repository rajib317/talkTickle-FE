import { Pressable, Text } from 'react-native';

export default function Button({
  color,
  textColor,
  roundCorner,
  children,
  title,
  size = 'xs',
  styles,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          backgroundColor: color,
          color: textColor,
          borderRadius: roundCorner ? 50 : 0,
          paddingVertical:
            (size === 'xs' && 5) ||
            (size === 'sm' && 10) ||
            (size === 'md' && 10) ||
            (size === 'lg' && 12),
          paddingHorizontal:
            (size === 'xs' && 10) ||
            (size === 'sm' && 15) ||
            (size === 'md' && 20) ||
            (size === 'lg' && 25),
        },
        { ...styles },
      ]}
    >
      <Text>{children || title}</Text>
    </Pressable>
  );
}
