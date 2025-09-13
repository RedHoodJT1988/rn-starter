import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const rangers = [
        {name: "Tommy", age: 16},
        {name: "Jason", age: 17},
        { name: "Kimberly", age: 16},
        {name:"Billy", age: 16},
        {name: "Zack", age: 17},
        {name: "Trini", age: 16}
    ];

    return (
        <FlatList
            data={rangers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item}) => {
                return (
                    <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;