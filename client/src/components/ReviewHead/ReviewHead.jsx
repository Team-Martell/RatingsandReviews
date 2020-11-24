import React from 'react';
import styles from './ReviewHead.module.css';
// CHECK OUT: https://www.w3schools.com/w3css/w3css_progressbar.asp
// for info on how to make the percentage meter

const ReviewHead = (props) => {
  return (
    <div>
      <h1>Guest Ratings and Reviews</h1>
      <div class='star-rating-table'>
        <div class={styles.stars}>5 stars</div>
        <div class={styles.stars}>4 stars</div>
        <div class={styles.stars}>3 stars</div>
        <div class={styles.stars}>2 stars</div>
        <div class={styles.stars}>1 star</div>
        <div class='star-percentage'>35%</div>
        <div class='star-percentage'>25%</div>
        <div class='star-percentage'>20%</div>
        <div class='star-percentage'>10%</div>
        <div class='star-percentage'>10%</div>
      </div>
    </div>
  );
};

export default ReviewHead;
