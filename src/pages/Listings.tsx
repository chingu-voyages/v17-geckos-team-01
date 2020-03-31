import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import Link from 'next/link';
import React, { Component } from 'react';
import { Property } from 'typings/propertyAddressTypes';
import { Nav } from '../component.exports';
import { render } from 'react-dom';
import getKey from '../ApiKey.js';

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

// @inject('addressStore')
// @observer
// class Listings extends Component {
//   // const classes = useStyles();
//   static async getInitialProps({ mobxStore, query }) {
//     await mobxStore.addressStore.fetchData(query.id);
//     return { address: mobxStore.addressStore.address };
//   }

//   render(): React.ReactElement {
//     const { address } = this.props;
//     return (
//       <>
//         <Nav navBarTitle="Listings" />
//         <Grid
//           style={{ marginTop: '3px' }}
//           alignItems="flex-start"
//           justify="center"
//           direction="row"
//           container
//           spacing={2}
//         >
//           {address.map(({ identifier: id, address: address }) => (
//             <>
//               <Grid style={{ maxWidth: 345 }} key={id.obPropId} item sm={3} xs={12}>
//                 <Card className={classes.paper} elevation={1}>
//                   <CardActionArea>
//                     <Link href="/p/[id]" as={`/p/${id.obPropId}`}>
//                       <CardHeader subheader={address.line2} title={address.line1}>
//                         <a>{address.line1}</a>
//                       </CardHeader>
//                     </Link>
//                   </CardActionArea>
//                   <CardContent>
//                     {/* <ListItem>
//                       <ListItemText primary={summary.absenteeInd} />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText primary={summary.propclass} />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText primary={summary.propsubtype} />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText primary={summary.yearbuilt} />
//                     </ListItem> */}
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">Share</Button>
//                     <Button size="small">Learn More</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             </>
//           ))}
//         </Grid>
//       </>
//     );
//   }
// }

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

Listings.getInitialProps = async function () {
  const APIKey = getKey();
  console.log(`API KEY IS ${APIKey}`);
  const address = await fetch(
    'http://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=82009&page=1&pagesize=10',
    { headers: { accept: 'application/json', apikey: APIKey } },
  );

  const summary = await fetch(
    'https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detailwithschools?id=16237759912033',
    { headers: { accept: 'application/json', apikey: APIKey } },
  );
  const addressData = await address.json();
  const summaryData = await summary.json();

  const combinedData = [...addressData.property, ...summaryData.property];
  // console.log(combinedData);

  return {
    // properties: data.property.map((entry) => entry),
    // summaries: summaryData.property.map((entry) => entry),
    data: combinedData,
  };
};

export default Listings;
// listings/[listing].tsx/property/[id].tsx
