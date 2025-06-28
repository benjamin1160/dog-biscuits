import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  )
}

export default MyApp
