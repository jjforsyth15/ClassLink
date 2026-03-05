import { Text, View, TextInput, Pressable, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { saveToken } from '@/src/features/auth/storage';

export default function RegisterScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

}