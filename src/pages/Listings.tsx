import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
  CardActionArea,
} from '@material-ui/core';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { Property } from 'typings/propertyAddressTypes';
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

const Listings: NextPage = ({ properties }: Property) => {
  const classes = useStyles();
  return (
    <>
      <Nav navBarTitle="Listings" />
      <Grid alignItems="flex-start" justify="center" direction="row" container spacing={2}>
        {properties.map((property) => (
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
  const res = await fetch(
    'http://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=82009&page=1&pagesize=10',
    { headers: { accept: 'application/json', apikey: '43fdb0bba16b6d9bb945439813e6fcac' } },
  );
  const data = await res.json();
  return {
    properties: data.property.map((entry: any) => entry),
  };
};

export default Listings;
