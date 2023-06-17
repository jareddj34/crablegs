import { useState } from 'react';
import { isValidUsername } from './isValidUsername';
import { useRouter } from 'next/router';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const validUser = isValidUsername(username);
    const validPass = isValidUsername(password);
    const router = useRouter();

    const handleSubmit = () => {
        event.preventDefault();
        if (!validUser) {
            throw new Error('Username is invalid')
        }
        if (!validPass) {
            throw new Error('Password is invalid')
        }
        const response = fetch('/api/createUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            router.push('/info')
        } else {
            // Handle error
            console.error('Failed to create user');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}