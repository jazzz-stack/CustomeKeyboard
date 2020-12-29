# OTP Verification Custome keyboard and TextInput #

![Optional Text](https://github.com/jaizzz/CustomeKeyboard/blob/main/customkeyboardforotp/screenshots/otp1.png)

Just copy and past both file in your fevourite IDE  .


* Creacte a components directory and copy past CustomKeyboard.js file in the same directory.
* components/CustomKeyboard.js
* Full code of CustomKeyboard.js

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

### Contact us:###

* jaswatinfra@gmail.com
