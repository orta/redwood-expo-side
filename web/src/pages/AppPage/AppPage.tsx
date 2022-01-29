import { Head, MetaTags } from '@redwoodjs/web'

const AppDev = () => (
  <>
    <Head>
      <script src="http://localhost:19006/static/js/bundle.js"></script>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"
      />

      <style>
        {`
      /**
       * Extend the react-native-web reset:
       * https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/StyleSheet/initialRules.js
       */
      html,
      body,
      #redwood-app,
      #root {
        width: 100%;
        /* To smooth any scrolling behavior */
        -webkit-overflow-scrolling: touch;
        margin: 0px;
        padding: 0px;
        /* Allows content to fill the viewport and go beyond the bottom */
        min-height: 100%;
      }
      #root {
        flex-shrink: 0;
        flex-basis: auto;
        flex-grow: 1;
        display: flex;
        flex: 1;
      }

      html {
        scroll-behavior: smooth;
        /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */
        -webkit-text-size-adjust: 100%;
        height: calc(100% + env(safe-area-inset-top));
      }

      body {
        display: flex;
        /* Allows you to scroll below the viewport; default value is visible */
        overflow-y: auto;
        overscroll-behavior-y: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -ms-overflow-style: scrollbar;
      }
      /* Enable for apps that support dark-theme */
      /*@media (prefers-color-scheme: dark) {
        body {
          background-color: black;
        }
      }*/`}
      </style>
    </Head>
    <div id="root"></div>
  </>
)

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <AppDev />
    </>
  )
}

export default HomePage
