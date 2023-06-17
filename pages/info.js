import Link from 'next/link';
import Head from 'next/head';
import UserInfo from '/components/user-info';

export default function Info() {

    return (

        <div>
            
            <style jsx global>
                {`
                body {
                    background-color: white;
                }
                `}
            </style>

            <Head>
                <title>User info page</title>
            </Head>
            <h1 style = {{
                textAlign: 'center',
                fontFamily: 'Arial, sans-serif',
                fontSize: '50px',
                color: 'green'
                }}>
                Tell us about yourself
            </h1>

            <p1 style = {{borderBottom: '2px solid red'}}>This has a box</p1>

            <UserInfo />
        </div>
    )
}