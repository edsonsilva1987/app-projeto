import { Text, StyleSheet } from 'react-native';

export function TextH1({ children }) {
    return (
        <Text style={styles.h1}>{children}</Text>
    );
}

export function TextH2({ children }) {
    return (
        <Text style={styles.h2}>{children}</Text>
    );
}
export function TextH3({ children }) {
    return (
        <Text style={styles.h2}>{children}</Text>
    );
}


export function Paragraf({ children }) {
    return (
        <Text style={styles.paragraf}>{children}</Text>
    );
}
const styles = StyleSheet.create({
    h1: {
        fontSize: 28,
        color: '#333',
      
    },
    h2: {
        fontSize: 26,
        color: '#333',
       
    }, 
    paragraf: {
        fontSize: 16,
        color: '#333',
       
    }
});