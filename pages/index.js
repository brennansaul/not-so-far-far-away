import Head from 'next/head'
import Link from 'next/link'
import React, {Fragment} from 'react';
import styles from '../styles/Home.module.css'
import Map from '../components/molecules/Map';

export default function Home() {
  console.log("key" + process.env.NEXT_PUBLIC_MAPS_KEY);

  return (
    <div className={styles.container}>
      <Head>
        <title>Not So Far Far Away</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <Map></Map>

      {/* <footer className={styles.footer}>
        <Link href="/defaultIndex">
          <a>
            Default Project page{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </Link>
      </footer> */}
    </div>
  )
}
