import React from 'react';
import styles from './Index.module.css';
import { Nav, Hero } from '../component.exports';

const Index: React.FC = () => (
  <div className={styles.topContainer}>
    <Nav />
    <Hero />
  </div>
);

export default Index;
