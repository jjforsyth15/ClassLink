import { useEffect, useState } from "react";
import { getToken } from "./storage";

type AuthStatus = 'loading' | 'signed_in' | 'signed_out';

export function useAuth() {
    const [status, setStatus] = useState<AuthStatus>('loading');

    useEffect(() => {
        (async () => {
            const token = await getToken();
            setStatus(token ? 'signed_in' : 'signed_out');
        })();
    }, []);

    return { status };
}