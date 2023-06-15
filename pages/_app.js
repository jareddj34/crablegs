import NavBar from '/components/navbar';
import '/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps} />
        </div>
    )
}