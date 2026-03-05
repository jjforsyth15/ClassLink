import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';
import { Image } from 'expo-image';

export default function WelcomeScreen() {

    return (
        <View style={styles.container}>

            <Image source={require('../assets/images/ClasslyLinked_Logo.png')} 
            style={styles.logo} />

            <Text style={styles.title}>Welcome to Classlink!</Text>
            <Text style={styles.subtitle}>Adding the mate in classmate</Text>
            <Text style={styles.subtitle}>Connect with students in your classes</Text>

            <TouchableOpacity 
                style={styles.primaryButton}
                onPress={() => router.push('/(auth)/login')}
                >
                    <Text style={styles.primaryButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => router.push('/(auth)/register')}
                >
                    <Text style={styles.secondaryButtonText}>Create Account</Text>
            </TouchableOpacity>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 40,
    },
    primaryButton: {
        width: '100%',
        backgroundColor: '#2563eb',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 12,
    },
    primaryButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    secondaryButton: {
        width: '100%',
        backgroundColor: '#2563eb',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
});