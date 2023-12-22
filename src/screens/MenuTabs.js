import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
// import {menuData,menuDetailedData} from '../global/Data'
// import MenuCard from '../components/MenuCard';

export default function Route1() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.view2}>
                <Text>View Tabs</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: '#673ab7'
    },

    view2: {
        marginTop: 5,
        paddingBottom: 20
    },

    scene2: { backgroundColor: '#673ab7' }

})


