import Layout from './Layout'
import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext'
import { useState } from 'react';
import React from 'react';



function MyApp({ Component, pageProps, ...appProps }) {
  const [ authState, setAuthState ] = useState({
    user: null,
    token: null
  });
  const isLayoutNeeded = [`/about`, `/profile`, `/`, `/feed`, `/create`].includes(appProps.router.pathname);
  const LayoutComponent = isLayoutNeeded ? Layout : React.Fragment;
  return (
    <AuthProvider>
      <LayoutComponent>
        <Component {...pageProps} auth={authState} funAuth={setAuthState}/>
      </LayoutComponent>
    </AuthProvider>
  )
}

export default MyApp;
