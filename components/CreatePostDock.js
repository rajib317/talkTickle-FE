import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import ImgaeButton from './ImageButton';
import OverlayPopup from './OverlayPopup';
import { useState } from 'react';
import RecordButton from './RecordButton';
import colors from '../constants/colors';

export default function CreatePostDock() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <ImgaeButton
          color={colors.grey}
          onPress={() => setModalVisible(true)}
        />
        <RecordButton
          color={colors.grey}
          onPress={() => alert('Reocrd Audio')}
        />
      </View>

      {modalVisible && (
        <OverlayPopup
          animationType='fade'
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.optionsContainer}>
            <Pressable onPress={() => alert('open Camera')}>
              <Text style={styles.optionsText}>Camera</Text>
            </Pressable>
            <Pressable onPress={() => alert('open Gallery')}>
              <Text style={styles.optionsText}>Gallery</Text>
            </Pressable>
          </View>
        </OverlayPopup>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    columnGap: 30,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    rowGap: 1,
    backgroundColor: '#3e3e3e',
    width: '75%',
  },
  optionsText: {
    backgroundColor: '#2e2e2e',
    padding: 20,
    color: 'white',
  },
});
