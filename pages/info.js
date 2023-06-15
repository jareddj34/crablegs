import Link from 'next/link';
import Head from 'next/head';
import UserInfo from '/components/user-info';

export default function Info() {

    return (
        <div>
            <Head>
                <title>User info page</title>
            </Head>
            <h1 style = {{
                textAlign: 'center',
                fontFamily: 'Arial, sans-serif',
                fontSize: '50px'

                }}>
                Tell us about yourself
            </h1>
            <UserInfo />
        </div>
    )
}