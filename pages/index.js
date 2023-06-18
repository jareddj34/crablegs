import Link from 'next/link';
import Head from 'next/head';
import UserInfo from '/components/user-info';
import { useState } from 'react';
import Retrieve from '/components/calendar-retrieve';

export default function Info() {

  return (
    <div className="info-container">
      <div className='banner'></div>
      <Head>
        <title>User info page</title>
      </Head>

      <UserInfo />

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