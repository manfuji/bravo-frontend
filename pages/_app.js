import 'tailwindcss/tailwind.css'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Script
    strategy='lazyOnload'
    src={`https://www.googletagmanager.com/gtag/js?id=G-C15Z4370V0`}/>

    <Script strategy='lazyOnload'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-C15Z4370V0');
      `}
    </Script>

    <Component {...pageProps} />
  </>
  )
}

export default MyApp
