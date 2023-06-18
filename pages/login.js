import Link from 'next/link';
import Head from 'next/head';
import UserInfo from '/components/user-info';
import { useState } from 'react';
import Retrieve from '/components/calendar-retrieve';
import Image from 'next/image';
import NavBar from '../components/navbar';
import LoginForm from '../components/loginform';

export default function LoginPage() {

    return (
        <div className="info-container">
            <div className='banner'>
                <NavBar />
            </div>
            <Head>
                <title>User info page</title>
            </Head>

            <Image src="/images/crab.png" width='60' height='50' z-index='2000' style={{
                position: 'fixed',
                top: '3.5%',
                left: '2.5%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2000
            }} />

            <LoginForm />



            <style jsx>{`
        .banner{
          width: 100%;
          height: 60px;
          background-color: #e73845;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }

        body {
          background-color: #white;
          font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .info-container {
          padding: 20px;
        }

        .title {
          text-align: center;
          font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
          color: black;
          font-size: 3em;
          font-weight: bold;
          margin: 60px auto auto auto;
        }
      `}</style>
        </div>
    )
}