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
import getKey from '../ApiKey';
import { FlashOnOutlined } from '@material-ui/icons';
import { createStore } from 'redux';
import { store, ADD_DATA, addData, dataReducer } from './_app';

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

  store.dispatch(addData(data));

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
        {data.map(({ property, sale }, index) => (
          <Grid className={classes.grid} key={property.identifier.obPropId} item sm={3} xs={12}>
            <Card className={classes.paper} elevation={1}>
              <CardActionArea>
                <Link href="/p/[id]" as={`/p/${index}`}>
                  <CardHeader subheader={property.address.line2} title={property.address.line1}>
                    <a>{property.address.line1}</a>
                  </CardHeader>
                </Link>
              </CardActionArea>
              <CardContent>
                <Typography variant="body2" component="p">
                  {sale.property[0].sale.amount.saleamt}
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

/**
 * URL Encodes a string
 *
 * @param string
 * @returns {string} A string that is URL complient
 */
function URLify(string): string {
  let str;
  str = string.trim().replace(/\s/g, '%20');
  str = str.replace(/,/g, '%2C');
  return str;
}

Listings.getInitialProps = async function (ctx) {
  const query = ctx.query.postalcode;
  const address = await fetch(
    `http://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=${query}&page=1&pagesize=10`,
    { headers: { accept: 'application/json', apikey: getKey() } },
  );

  const addressData = await address.json();

  const addressSalesArray = await Promise.all(
    addressData.property.map(async (property) => {
      //   const xyz = 'hello';
      const address1 = URLify(property.address.line1);
      const address2 = URLify(property.address.line2);
      //const saleData = async function (address1, address2) {
      const sale = await fetch(
        `http://api.gateway.attomdata.com/propertyapi/v1.0.0/sale/detail?address1=${address1}&address2=${address2}`,
        { headers: { accept: 'application/json', apikey: getKey() } },
      )
        .then(function (response) {
          if (response.status !== 200) {
            return;
          } else {
            return response.json();
          }
        })
        .then((data) => {
          return data;
        });
      // return sale.json();
      //};
      return { property, sale };
    }),
  );

  const addressSalesFilter = addressSalesArray.filter((propertySales) => {
    if (
      propertySales.sale == undefined ||
      propertySales.sale.status.msg.includes('No data available') ||
      propertySales.sale.property[0].sale.amount.saleamt == 0
    ) {
      return false;
    }
    return true;
  });

  return { query: query, data: addressSalesFilter };
};

export default Listings;
