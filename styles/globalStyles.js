import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 18,
        fontFamily: 'pacifico-regular',
    },
    bgImageContainer: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
});