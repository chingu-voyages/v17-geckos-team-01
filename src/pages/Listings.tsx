import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { Nav } from '../component.exports';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '2px',
    textAlign: 'center',
    color: 'white',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

const Listings: NextPage = ({ data }: any) => {
  const classes = useStyles();
  return (
    <>
      <Nav navBarTitle="Listings" />
      <Grid
        style={{ marginTop: '3px' }}
        alignItems="flex-start"
        justify="center"
        direction="row"
        container
        spacing={2}
      >
        {data.map((property) => (
          <Grid style={{ maxWidth: 345 }} key={property.identifier.obPropId} item sm={3} xs={12}>
            <Card className={classes.paper} elevation={1}>
              <CardActionArea>
                <Link href="/p/[id]" as={`/p/${property.identifier.obPropId}`}>
                  <CardHeader subheader={property.address.line2} title={property.address.line1}>
                    <a>{property.address.line1}</a>
                  </CardHeader>
                </Link>
              </CardActionArea>
              <CardContent>
                <Typography variant="body2" component="p">
                  Content
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

Listings.getInitialProps = async function () {
  const address = await fetch('http://127.0.0.1:3100/address', {
    headers: { accept: 'application/json', apikey: '236e138b3c80fc33a9245df42338e83e' },
  });
  const summary = await fetch('http://127.0.0.1:3100/detailwithschools?id=16237759912033', {
    headers: { accept: 'application/json', apikey: '236e138b3c80fc33a9245df42338e83e' },
  });
  const addressData = await address.json();
  const summaryData = await summary.json();

  const combinedData = [...addressData, ...summaryData.property];
  console.log(addressData);

  return {
    // properties: data.property.map((entry) => entry),
    // summaries: summaryData.property.map((entry) => entry),
    data: combinedData,
  };
};

export default Listings;
