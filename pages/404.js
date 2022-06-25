import Head from "next/head";
import Image from "next/image";
import astro from '../public/astro.svg';
import Link from "next/link";


const NotFound = () => {

    return (
        <>
            <Head>
                <title> Monet | Not Found</title>
            </Head>


            <div className="bg-indigo-900 relative overflow-hidden h-screen">
                <Image src={astro} layout='fill' objectFit="cover"/>
                <div className="inset-0 bg-black opacity-25 absolute">
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    <div className="w-full font-mono flex flex-col items-center relative z-10">
                        <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                            You&#x27;re alone here
                        </h1>
                        <p className="font-extrabold text-8xl my-43 text-white animate-bounce">
                            404                         
                        </p>
                        <h2 className="font-extrabold text-4xl text-center text-white leading-tight hover:underline mt-100">
                            <Link href="/">
                            Go home
                            </Link>
                        </h2>
                    </div>
                   
                </div>
            </div>


        </>
    )
}

export default NotFound;