import React, { useState, useRef, useEffect, useContext } from 'react';

import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { colors, parameters, title } from "../../Global/style"

import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import { Icon, Button, SocialIcon } from 'react-native-elements'

export default function SignInWelcomeScreen() {

    const navigation = useNavigation(); // Use useNavigation hook to get the navigation prop

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} >


            <View style={{ justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>KHÁM PHÁ MÓN ĂN NGON</Text>
                <Text style={{ fontSize: 26, color: 'black', fontWeight: 'bold' }}>GẦN NHÀ BẠN</Text>
            </View>


            <View style={{}}>

                <Swiper autoplay={true} style={{ height: 250 }}>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://media.cooky.vn/images/blog-2016/cach-lam-3-mon-pho-nuoc-ngon-nong-hoi-dam-da-huong-vi-viet%201.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>

                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: "https://static.vinwonders.com/production/ga-ran-nha-trang-1.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>


                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: "https://file.hstatic.net/1000394081/article/bun-dau-mam-tom-thap-cam_2321472f6d634b1192e171c5e659e187.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>


                </Swiper>
            </View>


            <View style={{flex: 4, justifyContent:'flex-end', marginBottom: 20 }}>

                <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                    <Button
                        title="ĐĂNG NHẬP"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => {
                            navigation.navigate("SignInScreen")
                        }}
                    />
                </View>

            

                <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                    <Button
                        title="TẠO TÀI KHOẢN"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>

            </View>


        </ScrollView>
    )
}


const styles = StyleSheet.create({

    slide1: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 50,
        paddingHorizontal: 20,
        borderColor: colors.buttons,
    },

    createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }

})