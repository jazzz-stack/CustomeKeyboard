import React, { Component } from 'react'
import { Dimensions, Keyboard, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Torch from 'react-native-torch'
import CustomKeyboard from '../components/CustomKeyboard'

class OTPVerification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEnable: false,
      otp: '',
    }
  }
  onTorch = () => {
    Torch.switchState(true)
  }

  offTorch = () => {
    Torch.switchState(false)
  }

  setVisibility = () => {
    this.setState({ isEnable: true })
  }

  onPressEnter = () => {
    this.setState({ isEnable: false })
  }

  onPressCancel = () => {
    let str = this.state.otp
    var res = str.replace(this.state.otp.charAt(this.state.length), "")
    this.setState({ otp: res })
  }

  setOtp = (getotp) => {
    if (this.state.otp.length > 3) {
      return;
    }
    this.setState({ otp: this.state.otp + getotp })
  }

  render() {
    return (
      <View style={{ flex: 1 }} >

        <TouchableWithoutFeedback
          onPress={() => this.setVisibility()}
        >
          <View style={{
            backgroundColor: "white",
            width: Dimensions.get('window').width / 1.2,
            elevation: 13,
            borderRadius: 10,
            height: 60,
            justifyContent: 'center',
            alignItems: "center",
            alignSelf: 'center'
          }}>
            <Text style={{ fontSize: 33, color: 'gray' }}  >
              {this.state.otp == "" ? `_    _    _    _` :
                `${this.state.otp.charAt(0)}   ${this.state.otp.charAt(1)}   ${this.state.otp.charAt(2)}   ${this.state.otp.charAt(3)}`}
            </Text>
          </View>
        </TouchableWithoutFeedback>


        <CustomKeyboard
          isVisible={this.state.isEnable}
          onPress={() => this.onPressEnter()}
          onChangeText={(otp) => this.setOtp(otp)}
          onPressCancel={() => this.onPressCancel()}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    margin: 20,
    fontSize: 22,
    color: "black",
    fontWeight: 'bold'
  },
  onStyle: {
    alignSelf: "center",
    paddingVertical: 20,
  },
  offStyle: {
    alignSelf: "center",
    paddingVertical: 20,
  },
  onText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18
  },
  offText: {
    color: "red",
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default OTPVerification
