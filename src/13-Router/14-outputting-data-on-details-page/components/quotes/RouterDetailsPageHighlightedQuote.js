import classes from './RouterDetailsPageHighlightedQuote.module.css';

const RouterDetailsPageHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterDetailsPageHighlightedQuote;
