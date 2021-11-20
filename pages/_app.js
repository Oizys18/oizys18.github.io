import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import '../styles/xterm.css'
const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} height="100%" />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
