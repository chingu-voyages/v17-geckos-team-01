import { IconButton, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import styles from './Hero.module.css';

const searchButtonClickHandler = (e: React.MouseEvent<HTMLElement>): void => {
  e.preventDefault();
  console.log('button clicked');
};

const Hero: React.FC = () => {
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
          <InputBase className={styles.inputField} placeholder="Address, City, State, Zip Code" />
          <div className={styles.buttonBackground}>
            <IconButton onClick={searchButtonClickHandler} className={styles.iconButton} type="submit">
              <SearchIcon className={styles.searchIcon} />
            </IconButton>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Hero;
