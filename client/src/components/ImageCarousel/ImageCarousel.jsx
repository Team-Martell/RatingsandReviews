import React from 'react';
import Image from '../Image/Image.jsx';

const ImageCarousel = ({images}) => {
  console.log('HERE ARE THE IMAGECAROUSEL IMAGES: ' + images);
  const imageList = images || [];
  return (
    <div>
      {imageList.map(image => {
        return (<Image
          image = {image}
        />);
      })}
    </div>
  );
};

export default ImageCarousel;

// const ReviewFeed = ({reviews}) => {
//   console.log('HERE ARE THE REVIEWS IN REVIEWFEED: ' + JSON.stringify(reviews));
//   return (
//     <div>
//       {reviews.map(review => {
//         return (<Review
//           review={review}
//         />);
//       })}
//     </div>
//   );
// };