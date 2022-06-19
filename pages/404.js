import { useEffect } from "react";
import { useRouter } from "next/router"
import Head from "next/head";
const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [])

    return (
        <>
        <Head>
            <title> Monet | Not Found</title>
        </Head>
        <div>
            <h1>Oops, page not found!</h1>
        </div>
        </>
    )
}

export default NotFound;