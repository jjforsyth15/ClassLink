import { Redirect } from "expo-router";
import { useAuth } from "@/src/features/auth/useAuth";
import LoadingScreen from "@/components/common/LoadingScreen";

export default function RootLayout() {
    const { status } = useAuth();

    if (status === 'loading')
        return <LoadingScreen />;

    if (status === 'signed_in')
        return <Redirect href='/(tabs)/home' />;

    return <Redirect href='/welcome' />;
}