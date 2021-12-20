import classes from './RouterRouteTstHighlightedQuote.module.css';

const RouterRouteTstHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterRouteTstHighlightedQuote;
