import React from 'react';
import { Hero, Nav } from '../component.exports';
import styles from './Index.module.css';

const Index: React.FC = ({}) => {
  return (
    <div className={styles.topContainer}>
      <Nav navBarTitle="Real Estate" />
      <Hero />
    </div>
  );
};

export default Index;
