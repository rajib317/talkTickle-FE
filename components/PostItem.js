import { StyleSheet, Text, Image, View, Pressable } from 'react-native';
import Card from './Card';
import CardBottom from './CardBottom';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import FollowButton from './FollowButton';

function getLavel(level) {
  if (level == 4) return 'native';
  if (level == 3) return 'advanced';
  if (level == 2) return 'intermediate';
  if (level == 1) return 'beginner';
}
export default function PostItem({ item }) {
  return (
    <Card style={styles.postItem}>
      <View style={styles.cardTop}>
        <Image style={styles.cardTop.profileImg} src={item.user.pic} />
        <View style={styles.cardTop.nameArea}>
          <Text style={styles.cardTop.nameArea.name}>{item.user.name}</Text>
          <View style={styles.cardTop.nameArea.lang}>
            <View>
              <Text>{item.user.lang.native.shortLebel}</Text>
              <View
                style={[styles.cardTop.level.bar, styles.cardTop.level.native]}
              ></View>
            </View>
            {item.user.lang.learning
              .sort((a, b) => b.level - a.level)
              .map((l) => {
                return (
                  <View key={l.shortLebel}>
                    <Text>{l.shortLebel}</Text>
                    <View
                      style={[
                        styles.cardTop.level.bar,
                        styles.cardTop.level.learning,
                        styles.cardTop.level[getLavel(l.level)],
                      ]}
                    >
                      {item.user.lang.learning.level}
                    </View>
                  </View>
                );
              })}
          </View>
        </View>

        <FollowButton isFollowing={item.user.isFollowing} />
      </View>

      <Text>{item.content}</Text>

      <View style={styles.imageGrid}>
        {item.images &&
          item.images.map((i, index) => (
            <Pressable key={index} onPress={() => alert(i.uri)}>
              <Image style={{ width: 150, height: 150 }} src={i.thumb} />
            </Pressable>
          ))}
      </View>

      <CardBottom styles={styles.cardBottom}>
        <LikeButton count={item.likesCount} />
        <CommentButton
          count={item?.comments?.count || 0}
          onPress={() => alert('Comment screen')}
        />
      </CardBottom>
    </Card>
  );
}

const styles = StyleSheet.create({
  postItem: {
    marginTop: 10,
    marginHorizontal: 5,
    rowGap: 10,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    profileImg: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    nameArea: {
      flexGrow: 1,

      name: {
        fontWeight: 'bold',
      },
      lang: {
        flexDirection: 'row',
        columnGap: 10,
      },
    },

    level: {
      bar: {
        height: 2,
        borderRadius: 2,
      },
      native: {
        backgroundColor: 'orange',
        width: 20,
      },
      learning: {
        backgroundColor: 'blue',
      },
      native: {
        width: 20,
      },
      advanced: {
        width: 15,
      },
      intermediate: {
        width: 10,
      },
      beginner: {
        width: 5,
      },
    },
  },
  cardBottom: {
    alignItems: 'baseline',
    columnGap: 20,
  },
});
