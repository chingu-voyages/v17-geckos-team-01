import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import { NextPage } from 'next';
import React from 'react';
import { connect } from 'react-redux';
import { Nav } from '../../component.exports';
import styles from './id.module.css';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
});

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const Post: NextPage = ({ index, state }: any) => {
  const classes = useStyles();

  return (
    <>
      <Nav
        linkStyle={{ color: 'black', textDecoration: 'none' }}
        navBarTitle={state[index].property.address.line1}
      />
      <div className={styles.viewing}> You are currently viewing info for: </div>
      <Card className={styles.root} elevation={1}>
        <div className={styles.topInfo}>
          <div className={styles.addressAndPrice}>
            <div className={styles.statValue}>{state[index].property.address.line1}</div>
            <div className={styles.statLabel}>{state[index].property.address.line2}</div>
          </div>
          <div className={styles.addressAndPrice}>
            <div className={styles.statValue}>${state[index].sale.property[0].sale.amount.saleamt}</div>
            <div className={styles.statLabel}>Price</div>
          </div>
          <div className={styles.addressAndPrice}>
            <div className={styles.statValue}>{state[index].sale.property[0].building.rooms.beds}</div>
            <div className={styles.statLabel}>Beds</div>
          </div>
          <div className={styles.addressAndPrice}>
            <div className={styles.statValue}>{state[index].sale.property[0].building.rooms.bathstotal}</div>
            <div className={styles.statLabel}>Baths</div>
          </div>
          <div className={styles.FavShare}>
            <a href="">
              <div className={styles.favButton}>
                Favorite <br />
                <FavoriteBorderIcon />
              </div>
            </a>
            <a href="">
              <div className={styles.shareButton}>
                Share <br />
                <ShareIcon />
              </div>
            </a>
          </div>
        </div>
        <CardContent className={styles.cardContent}>
          <div className={styles.picAndDescription}>
            <div className={styles.stockHouse}>
              <img src="/stockHouseImage.jpg" alt="House Image" />
            </div>
            <div className={styles.description}>
              This is a very rare find, a home with over . 5 acre sitting in the middle of 10 acres owned by
              the township!!! Location is the key with this home. It has the public water and sewer and a 2
              car oversize garage with a nice paved driveway. This piece of paradise was owner-occupied by one
              owner for almost 50 years and it is now ready for the next buyer to put their own style, design,
              improvements, additions and creativity to the property. If you were thinking about building,
              consider looking at this property. Truly astonishing that such a spot exists in the middle of
              such a major metropolitan area. It is a private lane and the home does have a deeded right of
              way to get to the home as well as a proportionate shared expense to maintain the lane. The
              property is well maintained and in move in condition: Living Rm with Stone wood-burning
              fireplace; full basement with laundry and outside exit to backyard; Eat-In-Kitchen with large
              pantry; nice front porch to enjoy the wooded setting.
            </div>
          </div>
          <div className={styles.infoContainer}>
            <Typography variant="h6">Summary: </Typography>
            <div className={styles.keyDetailsList}>
              <div className={styles.keyDetails}>
                <span className={styles.spanHeader}>Status</span>
                <span className={styles.spanInfo}>Active</span>
              </div>
              <div className={styles.keyDetails}>
                <span className={styles.spanHeader}>Style</span>
                <span className={styles.spanInfo}>{state[index].sale.property[0].summary.propsubtype}</span>
              </div>
              <div className={styles.keyDetails}>
                <span className={styles.spanHeader}>Year Built</span>
                <span className={styles.spanInfo}>{state[index].sale.property[0].summary.yearbuilt}</span>
              </div>
              <div className={styles.keyDetails}>
                <span className={styles.spanHeader}>Size</span>
                <span className={styles.spanInfo}>2088 sqft.</span>
              </div>
              <div className={styles.keyDetails}>
                <span className={styles.spanHeader}>Municipality</span>
                <span className={styles.spanInfo}>Montogomery County</span>
              </div>
              <div className={styles.keyDetails}>
                <span className={styles.spanHeader}>Condition</span>
                <span className={styles.spanInfo}>Average</span>
              </div>
            </div>
            <Typography variant="h6">Property Details: </Typography>
            <div className={styles.keyDetailsList}>
              <div className={styles.keyDetails}>
                <span className={styles.spanHeader}>Bedrooms</span>
                <span className={styles.spanInfo}>4</span>
              </div>
              <div className={styles.keyDetails}>
                <span className={styles.spanHeader}>Bathrooms(Full/Half)</span>
                <span className={styles.spanInfo}>2/0</span>
              </div>
              <div className={styles.keyDetails}>
                <span className={styles.spanHeader}>Cooling Type</span>
                <span className={styles.spanInfo}>AC Central</span>
              </div>
              <div className={styles.keyDetails}>
                <span className={styles.spanHeader}>Heating Type</span>
                <span className={styles.spanInfo}>Central(Oil)</span>
              </div>
            </div>
            <div className={styles.mapPic}>
              <img src="/mapPic.png" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

Post.getInitialProps = async function (context) {
  const index = context.query.id;

  return { index };
};

export default connect(mapStateToProps)(Post);
