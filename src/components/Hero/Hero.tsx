import { IconButton, InputBase, Paper } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import Router from 'next/router';
import React, { useState } from 'react';
import styles from './Hero.module.css';

const preventDefault = (func) => (event) => {
  event.preventDefault();
  func(event);
};

const Hero: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleParam = (setValue) => (event) => setValue(event.target.value);

  const handleSubmit = preventDefault(() => {
    Router.push({
      pathname: '/listings',
      query: { postalcode: query },
    });
  });

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
            onChange={handleParam(setQuery)}
            className={styles.inputField}
            placeholder="Zipcode"
            startAdornment={<HomeOutlined />}
            value={query}
          />
          <div className={styles.buttonBackground}>
            <IconButton onClick={handleSubmit} className={styles.iconButton} type="submit">
              <SearchIcon className={styles.searchIcon} />
            </IconButton>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Hero;
