import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Modal from 'react-native-modal';
const { width, height } = Dimensions.get('window');

export default ({ visible, close, children,extraStyle }) => (
  <TouchableWithoutFeedback onPress={close} style={{ width: width }}>
    <Modal
      isVisible={visible}
      animationIn='fadeIn'
      hasBackdrop={false}
      deviceWidth={width}
      deviceWidth={height}
      onBackdropPress={close}
      style={{ margin: 0 }}
    >
      <View style={[styles.modal,extraStyle]}>
        {/* modal content placed here */}
        {children}
      </View>
    </Modal>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  modal: {
    //flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    height: height

  },
})
