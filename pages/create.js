import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MarkdownInput from "../components/markdownInput";
import MarkdownOutput from "../components/markdownOutput";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function create({ auth, funAuth }) {
    const router = useRouter();
    const [markdownText, setMarkdownText] = useState(``);
    const [ tag, setTag ] = useState('tag');

    useEffect(() => {
        if (!auth.user) {
            router.push('/auth/Login');
        }
    }, []);

    const tags = ['test','general','news','others','memes', 'wholesome', 'entertainment', 'games']

    const handleClick = (e) => {
        setTag(e.target.innerHTML);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const data = {
            email: auth.user.email,
            title: e.target[0].value,
            body: markdownText, 
            upvotes: 0,
            downvotes: 0,
            tag: tag
        }
        try {
            const res = await axios.post('https://social-blog-api.herokuapp.com/api/v1/posts', data, config);
            setTag('tag');
            e.target[0].value = '';
            setMarkdownText(``);
            toast('Post Created!');

            setTimeout(() => router.push('/feed'), 3000);

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <Head>
                <title> Monet | Create </title>
            </Head>
            <ToastContainer />
            <div className="flex flex-col items-center h-96 w-full">
                <div className='flex h-full w-full'>
                    <MarkdownInput editText={setMarkdownText} />

                    <MarkdownOutput markdownValue={markdownText} />
                </div>
            </div>
            <br /> <br /> <br /><br /> <br /> <br />
            <div className="flex items-center ml-20 w-full">
                <form className="w-96 max-w-sm" onSubmit={handleSubmit}>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter a cool title..." />
                        <div className="p-4">
                            <div className="group relative">
                                <button className="bg-gray-800 text-white px-10 h-9 rounded">{tag}</button>
                                <nav tabIndex="0" className="border border-2 bg-white invisible border-gray-800 rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                                    <ul className="py-1">
                                        {tags.map((val) => {
                                            return <li key={val} className="block px-4 py-2 hover:bg-gray-100" onClick={handleClick}>
                                            {val}
                                        </li>
                                        })}

                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <input className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" />

                    </div>

                </form>
            </div>
        </>
    )
}

export default create;