import Link from 'next/link';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    {//get rid of this eventually
                    }
                    <Link href='/'>Login Page</Link>
                </li>
            </ul>
            <ul>
                <li>
                    {
                        //replace this page eventually with a new one that shows your personal info but as a profile page,
                        //not the original page where we ask you info
                    }
                    <Link href='/info'>Personal Info Page</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href='/home'>Home Page</Link>
                </li>
            </ul>
        </nav>
    )
}