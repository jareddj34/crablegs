import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Image from 'next/image';
import LoginForm from '/components/login-form';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Image src='/images/crab.png'
        alt='crablegs'
        height={200}
        width={200} />
      <h1 style={{ color: 'red' }}>
        Crab Legs
      </h1>
      <LoginForm />

      <Link href="/info">Click for info page</Link>
    </div>
  )
}
