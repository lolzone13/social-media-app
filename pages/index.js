import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'



export default function Home({ auth, funAuth }) {
    const router = useRouter();
    if (!auth.user) router.push('/auth/register');
    return (
        <>
            <Head>
                <title> Monet | Home </title>
            </Head>
            <div>

                <h1>Homepage</h1>
            </div>
            <div>
             
            </div>
        </>
    )
}
