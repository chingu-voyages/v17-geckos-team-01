// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// /* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable jsdoc/check-param-names */
// import CssBaseline from '@material-ui/core/CssBaseline';
// import '../index.css';
// import App from 'next/app';
// import initializeStore from '../stores/store';
// import { Provider } from 'mobx-react';

// class MyApp extends App {
//   static async getInitialProps(appContext) {
//     const mobxStore = initializeStore();
//     appContext.ctx.mobxStore = mobxStore;
//     const appProps = await App.getInitialProps(appContext);
//     return {
//       ...appProps,
//       initialMobxState: mobxStore,
//     };
//   }

//   constructor(props) {
//     super(props);
//     const isServer = typeof window === 'undefined';
//     this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
//   }

//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <Provider>
//         <CssBaseline />
//         <Component {...pageProps} />
//       </Provider>
//     );
//   }
// }

// export default MyApp;

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import '../index.css';
import CssBaseline from '@material-ui/core/CssBaseline';

/**
 *
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
