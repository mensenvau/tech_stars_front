import "../styles/globals.css"
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return <div>
        <Component {...pageProps} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </div>
}