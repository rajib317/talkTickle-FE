import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Doc from '../components/Doc';
import PostItem from '../components/PostItem';
import Nav from '../components/Nav';
export default Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const func = async () => {
      try {
        const a = await axios('http://192.168.0.125:3000/post-items');
        setPosts(a.data);
      } catch (error) {
        console.log(error);
      }
    };

    func();
  }, []);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View>
          <Nav />
        </View>

        <FlatList
          style={styles.postArea}
          data={posts}
          renderItem={({ item }) => <PostItem item={item} />}
        />
        <Doc />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
