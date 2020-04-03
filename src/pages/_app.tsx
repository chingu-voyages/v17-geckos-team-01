/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import CssBaseline from '@material-ui/core/CssBaseline';
import { store, view } from '@risingstack/react-easy-state';
import axios from 'axios';
import { createContext } from 'react';
import '../index.css';

interface ContextProps {
  zipCode?: string;
  setZipcode?: any;
  fetchData?: any;
  propertyAddressData?: any;
  setPropertyData?: any;
}

export const addressData: ContextProps = store({
  zipCode: '',
  setZipcode: (value: string) => {
    addressData.zipCode = value;
  },
  setPropertyData: (value) => {
    addressData.propertyAddressData = value;
  },
  fetchData() {
    axios
      .get(
        `http://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=${addressData.zipCode}&page=1&pagesize=10`,
        { headers: { accept: 'application/json', apikey: '9b30f9c388d07ce1058b3933676472f4' } },
      )
      .then((res) => {
        addressData.setPropertyData(res.data);
      })
      .then(() => {
        console.log(addressData.propertyAddressData);
      });
  },
  propertyAddressData: {},
});

export const AddressContext = createContext<ContextProps | null>(null);

/**
 *
 */
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <AddressContext.Provider value={addressData}>
        <CssBaseline />
        <Component {...pageProps} />
      </AddressContext.Provider>
    </>
  );
};

export default view(MyApp);
