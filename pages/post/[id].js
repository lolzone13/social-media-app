import Head from "next/head";
import axios from 'axios'

export const getStaticPaths = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
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
        const id = context.params.id;
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);

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
        {data.username}
        <div>Post!</div>
        </>
    )
}

