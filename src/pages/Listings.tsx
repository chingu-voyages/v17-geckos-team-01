import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import Link from 'next/link';
import { Nav } from '../component.exports';
import { Card, CardContent } from '@material-ui/core';

const Listings: NextPage = ({ properties }) => {
  return (
    <>
      {properties.map((property: any) => (
        <div key={property.identifier.obPropId}>
          <Card
            elevation={1}
            width={300}
            height={100}
            style={{ backgroundColor: 'gray', paddingBottom: '5px' }}
          >
            <CardContent>
              <Link href="/p/[id]" as={`/p/${property.identifier.obPropId}`}>
                <a>{property.address.line1}</a>
              </Link>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
};

// const Listings: NextPage = ({ properties }: any) => (
//   <>
//     <Nav />
//     <h1>Listing</h1>
//     <ul>
//       {properties.map((property: any) => (
//         <li key={property.identifier.obPropId}>
//           <Link href="/p/[id]" as={`/p/${property.identifier.obPropId}`}>
//             <a>{property.address.line1}</a>
//           </Link>
//         </li>
//       ))}
//       <li></li>
//     </ul>
//   </>
// );

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
