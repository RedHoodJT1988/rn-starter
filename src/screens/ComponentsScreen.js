import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Jonathan';

    return (
        <View>
            <Text style={styles.mainHeader}>Getting started with React Native!</Text>
            <Text style={styles.subHeader}>My name is { name }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    mainHeader: {
        fontSize: 45,
    },
    subHeader: {
        fontSize: 20
    }
});

export default ComponentsScreen;