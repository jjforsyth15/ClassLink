import { Text, View, TextInput, Pressable, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useState, useEffect, use } from 'react';
import { router } from 'expo-router';
import { saveToken } from '@/src/features/auth/storage';
import validateLoginData  from '@/src/features/auth/validation';
import { Image } from 'expo-image';

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        

    }, []);

    const onLogin = async () => {
        const { valid, message } = validateLoginData(email, password);
        if (!valid) {
            Alert.alert(message);
            return;
        }
        setLoading(true);

        try {
            // const response = await loginRequest(email, password);
            // await saveToken(response.token);
            // router.push('/(tabs)/home');
        } catch (error: any) {
            Alert.alert('Could not login. Please check login details and try again.', 'Error:', error?.message);
        } finally {
            setLoading(false);
        }
    };


    return (

        <View style={styles.container}>
            
            <Image
                source={require('../../assets/images/ClasslyLinked_Logo.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor='gray'
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                editable={!loading}
                autoCorrect={false}
                autoComplete='email'
            />

            <TextInput
                style={styles.input}
                placeholderTextColor='gray'
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                editable={!loading}
                autoCorrect={false}
                autoComplete='password'
            />

            <TouchableOpacity
                style={styles.primaryButton}
                onPress={onLogin}
                disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.primaryButtonText}>Login</Text>
                    )}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => router.push('/(auth)/register')}
                disabled={loading}
                >
                    <Text style={styles.secondaryButtonText}>Don't have an account? Register here</Text>
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
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
    primaryButton: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 26,
        marginBottom: 40,
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryButton: {
        borderWidth: 1,
        borderColor: "#2563eb",
        padding: 16,
        borderRadius: 10,
        alignItems: "center",
    },

    secondaryButtonText: {
        color: "#2563eb",
        fontSize: 16,
        fontWeight: "600",
    },
    linkText: {
        color: '#007AFF',
        fontSize: 16,
        textDecorationLine: 'none',
    },
    logo: {
    width: 160,
    height: 160,
    marginBottom: 50,
  },
});