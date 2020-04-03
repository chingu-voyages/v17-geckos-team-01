import { IconButton, InputBase, Paper } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { view } from '@risingstack/react-easy-state';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { AddressContext } from '../../pages/_app';
import styles from './Hero.module.css';

const Hero: React.FC<{
  setZipcode?: any;
  zipCode?: string;
  fetchData?: any;
}> = () => {
  const { setZipcode, zipCode, fetchData } = useContext(AddressContext);
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <h2>
          No Listing Fees.
          <br />
          None. Whatsoever.
        </h2>
        <br />
        <br />
        <br />
        <Paper className={styles.searchBar} component="form">
          <InputBase
            onChange={(event): void => {
              setZipcode(event.target.value);
              console.log(zipCode);
            }}
            className={styles.inputField}
            placeholder="Zipcode"
            startAdornment={<HomeOutlined />}
          />
          <div className={styles.buttonBackground}>
            <IconButton
              onClick={(event): void => {
                event.preventDefault();
                fetchData();
                router.push('/listings');
              }}
              className={styles.iconButton}
              type="submit"
            >
              <SearchIcon className={styles.searchIcon} />
            </IconButton>
          </div>
        </Paper>
        {zipCode}
      </div>
    </>
  );
};

export default view(Hero);
