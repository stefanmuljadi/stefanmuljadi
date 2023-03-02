import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';


export default function App({ Component, pageProps }) {
  const [dest, setDest] = useState("");
  return (
    <div className='relative'>
      <Navbar className="sticky" dest={dest} setDest={setDest}/>
      <div className='absolute top-0 -z-50 text-primary w-full h-full'>
        <Component {...pageProps} className="" dest={dest}/>
      </div>
      <Footer/>
    </div>
  )
}
