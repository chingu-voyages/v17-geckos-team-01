/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import CssBaseline from '@material-ui/core/CssBaseline';
import '../index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';

/**
 *
 */
export const ADD_DATA = 'ADD_DATA';
/**
 * @param info
 */
export const addData = (info) => {
  return {
    type: 'ADD_DATA',
    data: info,
  };
};

export const dataReducer = (state = 'Initial State', action) => {
  switch (action.type) {
    case ADD_DATA:
      return action.data;

    default:
      return state;
  }
};

export const store = createStore(dataReducer);

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
