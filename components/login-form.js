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
            throw new Error('Username is invalid you retard!!!!')
        }
        if (!validPass) {
            throw new Error('Password is invalid you retard!!!!')
        }
        router.push('/info')
        console.log(username, password);
        //create new user object in prisma and put add a username and password to it
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