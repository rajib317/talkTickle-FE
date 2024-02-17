import { Pressable, View, Text } from 'react-native';
import CommentItem from './CommentItem';

export default function Comments({ comments }) {
  return (
    <>
      <Text>Comments</Text>

      {comments.map((c, index) => {
        return (
          <CommentItem
            key={c.user.id}
            username={c.user.name}
            originalText={c.message.originalText}
            correctedText={c.message.correctedText}
          />
        );
      })}
    </>
  );
}
