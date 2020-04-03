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
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useContext } from 'react';
import { addressData, AddressContext } from '../pages/_app';
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

const Listings: NextPage = () => {
  const classes = useStyles();
  const { propertyAddressData } = useContext(AddressContext);

  return (
    <>
      {console.log(`Listings ${propertyAddressData.property}`)}
      <Nav linkStyle={{ color: 'black', textDecoration: 'none' }} navBarTitle="Listings" />
      <Grid
        style={{ marginTop: '3px' }}
        alignItems="flex-start"
        justify="center"
        direction="row"
        container
        spacing={2}
      >
        {propertyAddressData.property.map((property) => (
          <Grid className={classes.grid} key={property.identifier.obPropId} item sm={3} xs={12}>
            <Card className={classes.paper} elevation={1}>
              <CardActionArea>
                <Link
                  href="/p/[id]"
                  as={`/p/${property.identifier.obPropId}&${property.address.line1}&${property.address.line2}`}
                >
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

// Listings.getInitialProps = async () => {
//   return { data: addressData.propertyAddressData };
// };

/**
 *
 */
// export async function getStaticProps() {
//   return {
//     props: addressData.propertyAddressData,
//   };
// }

export default Listings;
