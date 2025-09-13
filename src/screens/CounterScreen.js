import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {
    // state === { count: number };
    // action === { type: 'increase' || 'decrease'}
    switch (action.type) {
        case 'increase':
            return state.count + 1 > 100 ? state : { ...state, count: state.count + 1 };
        case 'decrease':
            return state.count - 1 < 0 ? state : { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer( reducer, { count: 0 });
    const { count } = state;

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increase'});
                }}
            />
            <Button title="Decrease" onPress={() => {
                dispatch({ type: 'decrease'});
                }}
            />
            <Text style={styles.textStyle}>Current Count {count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    }
});

export default CounterScreen;