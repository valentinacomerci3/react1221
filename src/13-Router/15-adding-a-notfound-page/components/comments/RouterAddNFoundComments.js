import { useState } from 'react';

import classes from './RouterAddNFoundComments.module.css';
import RouterAddNFoundNewCommentForm from './RouterAddNFoundNewCommentForm';

const RouterAddNFoundComments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <RouterAddNFoundNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterAddNFoundComments;
