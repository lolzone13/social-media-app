import Layout from './Layout'
import '../styles/globals.css'
import { AuthProvider } from '../context/AuthContext'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [ authState, setAuthState ] = useState({
    user: null,
    token: null
  });
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} auth={authState} funAuth={setAuthState}/>
      </Layout>
    </AuthProvider>
  )
}

export default MyApp;
