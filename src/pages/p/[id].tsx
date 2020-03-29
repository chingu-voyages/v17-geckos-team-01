import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import React from 'react';
import JSONPretty from 'react-json-pretty';
import { Nav } from '../../component.exports';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
});

const Post: NextPage = ({ details }: any) => {
  const pdetails = details.property[0];
  const classes = useStyles();

  return (
    <>
      <Nav navBarTitle={pdetails.address.line1} />
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.root} elevation={1}>
            <JSONPretty id="json-pretty" data={pdetails.address}></JSONPretty>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.root} elevation={1}>
            <JSONPretty id="json-pretty" data={pdetails.summary}></JSONPretty>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.root} elevation={1}>
            <JSONPretty id="json-pretty" data={pdetails.lot}></JSONPretty>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.root} elevation={1}>
            <JSONPretty id="json-pretty" data={pdetails.school}></JSONPretty>
          </Paper>
        </Grid>

        {/* <JSONPretty id="json-pretty" data={pdetails.building.summary}></JSONPretty>
        <JSONPretty id="json-pretty" data={pdetails.summary}></JSONPretty>
        <JSONPretty id="json-pretty" data={pdetails.lot}></JSONPretty>
        <JSONPretty id="json-pretty" data={pdetails.school}></JSONPretty>
        <JSONPretty id="json-pretty" data={pdetails.address}></JSONPretty> */}
      </Grid>
      {/* Check if we require more details from other api's */}
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
