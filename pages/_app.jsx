import '/styles/globals.css'
import { useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { deepOrange, purple } from '@mui/material/colors';
import createEmotionCache from '/utils/createEmotionCache';
import theme from '/utils/theme';

const clientSideEmotionCache = createEmotionCache();

import useThemeMode from '/context/themeMode.js';

export default function MyApp(props) {
   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

   const themeMode = useThemeMode( (S)=> S.siteTheme.theme );

   const darkTheme = createTheme({
      palette: {
         mode: 'dark',
         primary: {
            main: deepOrange[500],
         },
         secondary: {
            main: purple[300],
         },
      }
   })

   return (
      <CacheProvider value={emotionCache}>
         <Head>
         <meta name="viewport" content="initial-scale=1, width=device-width" />
         </Head>
         <ThemeProvider theme={themeMode=='light'?theme:darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
         </ThemeProvider>
      </CacheProvider>
   );
}

MyApp.propTypes = {
   Component: PropTypes.elementType.isRequired,
   emotionCache: PropTypes.object,
   pageProps: PropTypes.object.isRequired,
};
