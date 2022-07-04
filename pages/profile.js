import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react'; 


export default function ({ auth, funAuth }) {
  const router = useRouter();
  useEffect(() => {
    if (!auth.user) {
      router.push('/auth/login');
    }
  }, []);
  return (
    <>
      <div>profile</div>
      <Footer />
    </>
  )
}
