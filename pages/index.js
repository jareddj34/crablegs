import Link from 'next/link';
import Head from 'next/head';
import UserInfo, { test } from '/components/user-info';
import { useState } from 'react';

export default function Info() {

  const [weight, setWeight] = useState('');

  const handleWeightChange = (value) => {
    setWeight(value);
  };

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
      <h1 style={{
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        fontSize: '50px',
        color: 'green'
      }}>
        Tell us about yourself
      </h1>

      <UserInfo />
    </div>
  )
}