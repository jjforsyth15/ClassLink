import { useEffect, useState } from "react";
import { getToken } from "./storage";

type AuthStatus = 'loading' | 'signed_in' | 'signed_out';

export function useAuth() {
    const [status, setStatus] = useState<AuthStatus>('loading');

    useEffect(() => {
        let cancelled = false;

        (async () => {
            try {
                const token = await getToken();
                if (!cancelled)
                    setStatus(token ? 'signed_in' : 'signed_out');
            } catch (error) {
                if (!cancelled)
                    setStatus('signed_out');
            }
        })();

        return () => {
            cancelled = true;
        };
    }, []);

    return { status };
}