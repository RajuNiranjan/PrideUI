import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Inter } from '@next/font/google'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return <div className={inter.className}>
    <NavBar />
    <div className="my-20 p-4">
      <Component {...pageProps} />
    </div>

  </div>;
}
