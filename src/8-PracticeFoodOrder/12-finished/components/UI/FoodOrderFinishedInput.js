import React from 'react';

import classes from './FoodOrderFinishedInput.module.css';

const FoodOrderFinishedInput = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default FoodOrderFinishedInput;
