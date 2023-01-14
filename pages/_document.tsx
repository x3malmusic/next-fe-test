import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance';
import { muiCache } from '../utils/theme';

import { augmentDocumentWithEmotionCache } from "./_app";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// MyDocument.getInitialProps = async (ctx) => {
//   const originalRenderPage = ctx.renderPage;

//   const { extractCriticalToChunks } = createEmotionServer(muiCache);

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App: any) =>
//         function EnhanceApp(props) {
//           return <App emotionCache={muiCache} {...props} />;
//         },
//     });

//   const initialProps = await Document.getInitialProps(ctx);

//   const emotionStyles = extractCriticalToChunks(initialProps.html);
//   const emotionStyleTags = emotionStyles.styles.map((style) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(' ')}`}
//       key={style.key}
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ));

//   return {
//     ...initialProps,
//     emotionStyleTags,
//   };
// };

augmentDocumentWithEmotionCache(MyDocument)

export default MyDocument