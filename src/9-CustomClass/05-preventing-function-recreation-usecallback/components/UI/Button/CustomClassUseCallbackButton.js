import React from 'react';

import classes from './CustomClassUseCallbackButton.module.css';

const CustomClassUseCallbackButton = (props) => {
  console.log('Button RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(CustomClassUseCallbackButton);