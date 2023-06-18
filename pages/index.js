import Link from 'next/link';
import Head from 'next/head';
import UserInfo from '/components/user-info';
import { useState } from 'react';

export default function Info() {

  return (
    <div className="info-container">
      <style jsx global>{`
        body {
          background-color: #a6463d;
          font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>

      <Head>
        <title>User info page</title>
      </Head>

      <h1 className="title">
        Tell us about yourself
      </h1>

      <UserInfo />

      <style jsx>{`
        .info-container {
          padding: 20px;
        }

        .title {
          text-align: center;
          color: #333;
          font-size: 2em;
          font-weight: bold;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  )
}