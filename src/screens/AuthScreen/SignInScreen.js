import React, { useState, useRef, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from 'react-native'
import { colors, parameters, title } from "../../Global/style"
import * as Animatable from 'react-native-animatable'
import { Icon, Button, SocialIcon } from 'react-native-elements'
import Header from '../../components/Header'

export default function SignInScreen({ navigation}) {

    const [textInput2Focused, setTextInput2Focused] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View style={styles.container}>

            <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title}>Đăng Nhập</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={styles.text1} >Vui lòng điền email và mật khẩu </Text>
                <Text style={styles.text1} >Đăng ký với tài khoản của bạn</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <View>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                    />
                </View>

                <View style={styles.TextInput2}>
                    <Animatable.View animation={textInput2Focused ? "" : "fadeInLeft"} duration={400} >
                        <Icon
                            name="lock"
                            iconStyle={{ color: colors.grey3 }}
                            type="material"
                            style={{}}
                        />
                    </Animatable.View>

                    <TextInput
                        style={{ width: '80%' }}
                        placeholder="Mật khẩu"
                        ref={textInput2}
                        onFocus={() => {
                            setTextInput2Focused(false)
                        }}
                        onBlur={() => {
                            setTextInput2Focused(true)
                        }}
                    />

                    <Animatable.View animation={textInput2Focused ? "" : "fadeInLeft"} duration={400} >
                        <Icon
                            name="visibility-off"
                            iconStyle={{ color: colors.grey3 }}
                            type="material"
                            style={{ marginRight: 10 }}
                        />
                    </Animatable.View>
                </View>
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                <Button
                    title="ĐĂNG NHẬP"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                        onPress={() => {
                        navigation.navigate("DrawerNavigator");
                      }}
                />
            </View>

            <View style={{ alignItems: "center", marginTop: 15 }}>
                <Text style={{ ...styles.text1, textDecorationLine: "underline" }}> Quên Mật Khẩu?</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hoặc</Text>
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <SocialIcon
                    title="Sign In With Facebook"
                    button
                    type="facebook"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <SocialIcon
                    title="Sign In With Google"
                    button
                    type="google"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>

            <View style={{ marginTop: 25, marginLeft: 20 }}>
                <Text style={{ ...styles.text1, }}>New on GrabFood?</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    TextInput: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },

    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15
    },

    SocialIcon: {
        borderRadius: 12,
        height: 50
    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 40,
        paddingHorizontal: 20,
    },

    createButtonTitle: {
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})
