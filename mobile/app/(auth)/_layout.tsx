import { Redirect, Stack, Tabs } from "expo-router";
import { useAuth } from "@/src/features/auth/useAuth";
import LoadingScreen from "@/components/common/LoadingScreen";
import { useColorScheme } from "react-native";

export default function RootLayout() {
    return (
        <Stack 
            screenOptions={{ 
                headerShown: true,
                headerTitle: '',
            }} 
        />
    );
}
