# OTP Verification Custome keyboard and TextInput #

![Optional Text](https://github.com/jaizzz/CustomeKeyboard/blob/main/customkeyboardforotp/screenshots/otp1.png)
![](https://github.com/jaizzz/CustomeKeyboard/blob/main/customkeyboardforotp/screenshots/key.png)

Just copy and past both file in your fevourite IDE  .


* Creacte a components directory and copy past CustomKeyboard.js file in the same directory.
* components/CustomKeyboard.js
### CustomKeyboard.js ###

```
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomKeyboard = (props) => {
    return (props.isVisible ?
        <View style={styles.contentContainer}>

            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }} >
                <TouchableOpacity
                    onPress={() => props.onChangeText('9')}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'9'} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.onChangeText('8')}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'8'} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.onChangeText('7')}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'7'} </Text>
                </TouchableOpacity>

            </View>


            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }} >
                <TouchableOpacity
                    onPress={() => props.onChangeText('6')}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'6'} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.onChangeText('5')}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'5'} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.onChangeText('4')}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'4'} </Text>
                </TouchableOpacity>

            </View>

            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }} >
                <TouchableOpacity
                    onPress={() => props.onChangeText('3')}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'3'} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.onChangeText('2')}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'2'} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.onChangeText('1')}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'1'} </Text>
                </TouchableOpacity>

            </View>


            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }} >
                <TouchableOpacity
                    onPress={props.onPressCancel}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'←'} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.onChangeText('0')}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'0'} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={props.onPress}
                    style={styles.btn}
                >
                    <Text style={styles.txt} > {'↩'} </Text>
                </TouchableOpacity>

            </View>

        </View>
        : null
    );
}
const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: 'white',
        height: Dimensions.get('window').width / 1.5,
        width: Dimensions.get('window').width,
        position: 'absolute',
        elevation: 5,
        bottom: 0,
    },
    btn: {
        backgroundColor: 'white',
        elevation: 5,
        flex: 1,
        margin: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    txt: {
        fontSize: 35,
    }
})
export default CustomKeyboard;
```
### How to Use CustomeKeyboard ###

* Just import CustomeKeyboard from components directory and pass the following props
``
      isVisible={this.state.isEnable}
      onPress={() => this.onPressEnter()}
      onChangeText={(otp) => this.setOtp(otp)}
      onPressCancel={() => this.onPressCancel()}
``

import CustomKeyboard from '../components/CustomKeyboard'




### OTPVerification.js ###
```
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
```


### Contact us:###

* jaswatinfra@gmail.com
