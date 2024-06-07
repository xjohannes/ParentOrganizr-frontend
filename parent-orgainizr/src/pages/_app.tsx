import { AppProps } from 'next/app';
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../app/ui/layout'

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
