import { useAuth } from '@/src/features/auth/useAuth';
import LoadingScreen from '@/components/common/LoadingScreen';
import { Redirect } from 'expo-router';


export default function Index() {
    const { status } = useAuth();

    if (status === 'signed_in')
        return <Redirect href='/(tabs)/home' />;
    else
        return <Redirect href='/welcome' />;
}