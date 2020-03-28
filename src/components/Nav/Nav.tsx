import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import React from 'react';
import styles from './Nav.module.scss';

// Makes use of the hooks style API
const useStyles = makeStyles({
  root: {
    marginTop: 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

const Nav: React.FC<{ navBarTitle: string }> = ({ navBarTitle = '17Geckos Real Estate' }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={styles.appBar} color="transparent" position="static" elevation={0}>
        <Toolbar>
          <div className={styles.leftSide}>
            <Typography className={classes.flex} variant="h6" color="inherit">
              {navBarTitle}
            </Typography>
          </div>
          <div className={styles.rightSide}>
            1-800-XXX-XXXX
            <div className={styles.divider}></div>
            <Link href="">
              <a className={styles.links}>Nearby Agents</a>
            </Link>
            <div className={styles.divider}></div>
            <Button variant="outlined" color="inherit">
              Log in
            </Button>
            <div className={styles.divider}></div>
            <Button variant="outlined" color="inherit">
              Sign up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
