import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Modal,
  Pressable,
} from 'react-native';
import Header from '../components/Header';
import axios from '../api/axios';
import { useContext, useEffect, useState } from 'react';
import Doc from '../components/Doc';
import PostItem from '../components/PostItem';
import Nav from '../components/Nav';
import CreatePost from './CreatePost';
import AuthContext from '../contexts/AuthProvider';
import colors from '../constants/colors';
export default Posts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const func = async () => {
      try {
        const response = await axios.get('/post-items', {
          signal: controller.signal,
        });
        isMounted && setPosts(response.data);
      } catch (error) {
        console.log(error.message);
        // alert(error.message);
      }

      return () => {
        isMounted = false;
        controller.abort();
      };
    };

    func();
  }, []);

  return (
    <>
      {openCreate && (
        <Modal animationType='slide'>
          <CreatePost close={() => setOpenCreate(() => false)} />
        </Modal>
      )}
      <Header openEdit={() => setOpenCreate(() => true)} />
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
