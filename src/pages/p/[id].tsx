import fetch from 'isomorphic-unfetch';
import React from 'react';
import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import JSONPretty from 'react-json-pretty';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 1,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    margin: 20,
    //margin: '0 auto',
    display: 'block',
  },
});

const Post: NextPage = ({ details }: any) => {
  const pdetails = details.property[0];
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <JSONPretty className={classes.root} id="json-pretty" data={pdetails.address}></JSONPretty>
        <JSONPretty className={classes.root} id="json-pretty" data={pdetails.building.summary}></JSONPretty>
        <JSONPretty className={classes.root} id="json-pretty" data={pdetails.summary}></JSONPretty>
        <JSONPretty className={classes.root} id="json-pretty" data={pdetails.lot}></JSONPretty>
        <JSONPretty className={classes.root} id="json-pretty" data={pdetails.school}></JSONPretty>
        <JSONPretty className={classes.root} id="json-pretty" data={pdetails.address}></JSONPretty>

        {/* Check if we require more details from other api's */}
      </Container>
    </>
  );
};

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(
    `https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detailwithschools?id=${id}`,
    { headers: { accept: 'application/json', apikey: '43fdb0bba16b6d9bb945439813e6fcac' } },
  );

  const details = await res.json();

  return { details };
};

export default Post;
