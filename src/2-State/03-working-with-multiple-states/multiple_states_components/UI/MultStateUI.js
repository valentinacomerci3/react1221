import React from 'react';



const MultStateUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default MultStateUI;
