/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import CssBaseline from '@material-ui/core/CssBaseline';
import '../index.css';

/**
 *
 */
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
