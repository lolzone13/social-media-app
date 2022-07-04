import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Card from "../components/Card";
import axios from 'axios';

export const getStaticProps = async () => {
    const res = await axios.get('http://localhost:5000/api/v1/posts');
    return {
        props: { ninjas: res.data }
    };
}



const feed = ({ auth, funAuth, ninjas }) => {

    const router = useRouter();
    useEffect(() => {
        if (!auth.user) {
            router.push('/auth/login');
        }
    }, []);
    return (
        <>
            <Head>
                <title> Monet | Feed</title>
            </Head>
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            {ninjas.data.map((val) => {
                                return <Card title={val.title} body={val.body} user={val.email} tag={val.tag} />
                            })}
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

export default feed;