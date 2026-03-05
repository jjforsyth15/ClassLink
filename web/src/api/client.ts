const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

export async function apiFetch(endpoint: string, options?: RequestInit) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, { 
        credentials: 'include',
        headers: { 
            'content-type': 'application/json',
        },
        ...options,
    })

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`)
    }

    return response.json()
}