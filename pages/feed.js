import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Card from "../components/Card";
import axios from 'axios';

export const getStaticProps = async () => {
    const res = await axios.get('https://social-blog-api.herokuapp.com/api/v1/posts');
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
                                const newStr = val.body.substring(0, Math.min(100, val.body.length)) + '...';
                                return <Card key={val.id} title={val.title} body={newStr} user={val.email} tag={val.tag} upvotes={val.upvotes} />
                            })}
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

export default feed;