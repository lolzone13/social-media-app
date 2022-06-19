import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export const getStaticProps = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/1/posts');

        return {
            props: { data: res.data }
        };
    } catch (error) {
        console.log(error);
    }
}

export default function Home({ data }) {
    return (
        <>
            <Head>
                <title> Monet | Home </title>
            </Head>
            <div>

                <h1>Homepage</h1>
            </div>
            <div>
                {data.map((item) => {
                    return <h3 key={item.id}>{item.title}</h3>
                })}
            </div>
        </>
    )
}
