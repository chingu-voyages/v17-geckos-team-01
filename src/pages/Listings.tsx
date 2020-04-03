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
import getKey from '../ApiKey';
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
  grid: {
    maxWidth: 345,
    marginTop: '3px',
  },
});

const Listings: NextPage<{ data: any }> = ({ data }) => {
  const classes = useStyles();

  if (data === undefined || data === null) {
    return <h1>Loading ...</h1>;
  } else {
    return (
      <>
        {console.log(`Listings ${data}`)}
        <Nav linkStyle={{ color: 'black', textDecoration: 'none' }} navBarTitle="Listings" />
        <Grid
          style={{ marginTop: '3px' }}
          alignItems="flex-start"
          justify="center"
          direction="row"
          container
          spacing={2}
        >
          {data.property.map((property) => (
            <Grid className={classes.grid} key={property.identifier.obPropId} item sm={3} xs={12}>
              <Card className={classes.paper} elevation={1}>
                <CardActionArea>
                  <Link href="/p/[id]" as={`/p/${property.address.line1}`}>
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
  }
};

Listings.getInitialProps = async function (ctx) {
  const APIKey = getKey();
  const query = ctx.query.postalcode;

  const address = await fetch(
    `http://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=${query}&page=1&pagesize=10`,
    { headers: { accept: 'application/json', apikey: '43fdb0bba16b6d9bb945439813e6fcac' } },
  );

  const addressData = await address.json();
  console.log(`query is ${query} and addressData is ${addressData}`);
  return { query: query, data: addressData };
};

export default Listings;
