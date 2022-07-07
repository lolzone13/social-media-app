import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Register({ auth, funAuth }) {

    // const { registerUser } = useContext(AuthContext);
    const [regDetails, setRegDetails] = useState({
        email: "",
        password: "",
        username: ""
    });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`https://social-blog-api.herokuapp.com/api/v1/auth/register`, regDetails, config);
            console.log(res);

            funAuth({
                user: res.data.data,
                token: res.data.token
            });
            router.push('/');
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <Head>
                <title> Monet | Register </title>
            </Head>
            <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up</h5>
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your username</label>
                        <input onChange={(e) => setRegDetails({ email: regDetails.email, password: regDetails.password, username: e.target.value })} type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input onChange={(e) => setRegDetails({ email: e.target.value, password: regDetails.password, username: regDetails.username })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Set password</label>
                        <input onChange={(e) => setRegDetails({ email: regDetails.email, password: e.target.value, username: regDetails.username })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account?
                        <Link href="/auth/Login">
                            <a className="text-blue-700 hover:underline dark:text-blue-500"> Login</a>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}
