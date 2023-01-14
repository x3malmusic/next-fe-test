import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { createEmotionSsrAdvancedApproach } from "tss-react/next";

import MainLayout from '../layouts/MainLayout';
import { muiCache, theme } from '../utils/theme';

const {
  augmentDocumentWithEmotionCache,
  withAppEmotionCache
} = createEmotionSsrAdvancedApproach(muiCache);

export { augmentDocumentWithEmotionCache };

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default withAppEmotionCache(App)