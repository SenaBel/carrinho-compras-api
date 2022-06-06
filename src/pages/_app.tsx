import  React from 'react'
import {ProdProvider} from '../../context/prodContext/index'
import {AppProps} from 'next/app'
import '../styles/global.css'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (

    <ProdProvider>
      <Component {...pageProps} />
    </ProdProvider>
        
  )
}

export default MyApp
