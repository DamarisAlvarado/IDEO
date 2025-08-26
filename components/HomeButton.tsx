import { Pressable, StyleSheet, Text } from "react-native";

interface Props{
    label: string;

}

export function HomeButton ({ label } : Props) {
    return (
            <Pressable
            style={({ pressed }) => [
                styles.container,
                pressed ? { opacity: 0.7 } : { opacity: 1 },
            ]} >
                <Text style ={{ color: 'white', fontSize: 20}}>{label}</Text>
            </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4B507C',
        borderRadius: 30,
        height: 150,
        width: 150,
        elevation: 3,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})