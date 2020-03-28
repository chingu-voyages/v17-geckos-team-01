import React from 'react';
import './Index.module.scss';
import { Nav, Hero } from '../component.exports';
import styles from './Index.module.scss';

const Index: React.FC = () => (
  <div className={styles.topContainer}>
    <Nav />
    <Hero />
  </div>
);

export default Index;
