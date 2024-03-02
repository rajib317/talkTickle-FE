import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';

export default function OverlayPopup({
  style,
  children,
  animationType,
  onRequestClose,
}) {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      onRequestClose={onRequestClose}
    >
      <Pressable onPress={onRequestClose} style={[style, styles.container]}>
        {children}
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
