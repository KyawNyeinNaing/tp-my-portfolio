import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../styles/globals.scss'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import { GlobalStyle } from '../components/core'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

NProgress.configure({
  minimum: 0.3,
  easing: 'ease-in-out',
  speed: 800,
  showSpinner: true
});

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />

      <MessengerCustomerChat
          pageId="100004777263473"
          appId='289516996157636'
        />
    </>
  )
}

export default App
