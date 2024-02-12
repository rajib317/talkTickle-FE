import { Text } from 'react-native';

const format = (count) => {
  if (count < 1000) return count;
  if (count < 1000000) return `${Math.floor(count / 1000)}K`;
  if (count < 1000000000) return `${Math.floor(count / 1000000)}M`;
  return `${Math.floor(count / 1000000000)}B`;
};
export default function CountFormat({ count }) {
  return <Text>{format(count)}</Text>;
}
