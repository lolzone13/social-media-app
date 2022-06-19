import Head from "next/head";
import axios from 'axios'

export const getStaticPaths = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/');
    const paths = res.data.map((item) => {
        return {
            params: { id: item.id.toString() }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/' + context.params.id);

        return {
            props: { data: res.data }
        };
    } catch (error) {
        console.log(error);
    }
}

export default function post({ data }) {
    return (
        <>
        <Head>
            <title>Monet | post</title>
        </Head>
        {data.map((item) => {
            return <li key={item.id}>{item.username}</li>
        })}
        <div>Post!</div>
        </>
    )
}

