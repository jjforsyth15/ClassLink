
export default function validateLoginData(email: string, password: string) {
    if (!email)
        return { valid: false, message: 'Email is required' };

    if (!password)
        return { valid: false, message: 'Password is required' };

    if (!email.includes('@'))
        return { valid: false, message: 'Please enter a valid email address' };

    if (password.length < 6)
        return { valid: false, message: 'Password must be at least 6 characters long' };

    return { valid: true, message: 'valid' };

}