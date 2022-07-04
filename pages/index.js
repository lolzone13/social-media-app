import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Footer from '../components/Footer'


export default function Home({ auth, funAuth }) {
    const router = useRouter();
    useEffect(() => {
        if (!auth.user) {
            router.push('/auth/login');
        }
    }, []);

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
            <Footer />
        </>
    )
}
