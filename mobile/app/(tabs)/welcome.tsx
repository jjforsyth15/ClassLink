import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { router, Redirect } from 'expo-router';
import { Image } from 'expo-image';


export default function WelcomeScreen() {
    return (
      <View style={styles.container}>

      <View style={styles.topSection}>
        <Image
          source={require('../../assets/images/ClasslyLinked_Logo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>ClassLink</Text>

        <Text style={styles.subtitle}>
          Connect with students in your classes
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/(auth)/login")}
        >
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/(auth)/register")}
        >
          <Text style={styles.secondaryButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>

    </View>
    );

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },

  topSection: {
    alignItems: "center",
    marginTop: 100,
  },

  bottomSection: {
    marginBottom: 40,
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    color: "gray",
    marginTop: 8,
    textAlign: "center",
  },

  primaryButton: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
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
});