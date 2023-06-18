import Link from 'next/link';

export default function NavBar() {
    return (
        <nav>
            <ul style={{
                display: 'flex',
                listStyle: 'none',
                justifyContent: 'space-around',
                color: 'white',
                fontSize: '20px', // Adjust this value to your desired size
                padding: '0'
            }}>
                <li>
                    <Link href='/' style={{ textDecoration: 'none', color: 'white' }}>AI Trainer</Link>
                </li>
                <li>
                    <Link href='/personal-calendar' style={{ textDecoration: 'none', color: 'white' }}>Personal Calendar</Link>
                </li>
                <li>
                    <Link href='/friends-calendar' style={{ textDecoration: 'none', color: 'white' }}>Social Calendar</Link>
                </li>
                <li>
                    <Link href='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

