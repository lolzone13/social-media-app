import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Footer from '../components/Footer'


export default function Home({ auth, funAuth }) {
  const router = useRouter();
  useEffect(() => {
    if (!auth.user) {
      router.push('/auth/login');
    }
  }, []);

  return (
    <>
      <Head>
        <title> Monet | Home </title>
      </Head>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Welcome to 
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">
                  the Social Blog.
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <Link href="/create">
                <a>
                  <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400 transform transition duration-500 hover:scale-110">
                    <div className="h-full p-5 border border-l-0 rounded-r">
                      <h6 className="mb-2 font-semibold leading-5">
                        Create Post.
                      </h6>
                      <p className="text-sm text-gray-900">
                        Share your thoughts with the world.
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/feed"><a>
                <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400 transform transition duration-500 hover:scale-110">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      Feed
                    </h6>
                    <p className="text-sm text-gray-900">
                      See what&apos;s happening around the world
                    </p>
                  </div>
                </div>
              </a></Link>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
