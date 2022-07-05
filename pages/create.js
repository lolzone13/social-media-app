import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MarkdownInput from "../components/markdownInput";
import MarkdownOutput from "../components/markdownOutput";

function create({ auth, funAuth }) {
    const router = useRouter();
    useEffect(() => {
        if (!auth.user) {
            router.push('/auth/login');
        }
    }, []);



    const [ markdownText, setMarkdownText ] = useState(``);
    return (
        <>
            <Head>
                <title> Monet | Create </title>
            </Head>
            <div className="flex flex-col items-center h-full w-full">
                <MarkdownInput editText={setMarkdownText}/>

                <MarkdownOutput markdownValue={markdownText} />
            </div>
        </>
    )
}

export default create;