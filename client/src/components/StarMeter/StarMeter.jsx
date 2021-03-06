import React from 'react';
import styles from './StarMeter.module.css';

const StarMeter = (props) => {
  const starShape = '18.380 17.55 3.57 17.55 15.55 26.08 10.94 39.97 22.99 31.39 35.05 39.97 30.44 26.08 42.42 17.55 27.61 17.55 22.99 3.61';
  return (
    <svg height="25" width="110">
      <polygon class={styles.first}class={styles.star} points={starShape}
        transform=
          "scale(0.5 0.5)"
      />
      <polygon class={styles.star} points={starShape} transform=
        "translate(21, 0)
        scale(0.5 0.5)"
      />
      <polygon class={styles.star} points={starShape} transform=
        "translate(42, 0)
        scale(0.5 0.5)"
      />
      <polygon class={styles.star} points={starShape} transform=
        "translate(63, 0)
        scale(0.5 0.5)"
      />
      <polygon class={styles.star} points={starShape} transform=
        "translate(84, 0)
        scale(0.5 0.5)"
      />
    </svg>
  );
};

export default StarMeter;