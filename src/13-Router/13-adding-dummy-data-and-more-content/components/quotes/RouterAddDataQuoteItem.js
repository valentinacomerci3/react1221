import classes from './RouterAddDataQuoteItem.module.css';

const RouterAddDataQuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className='btn'>
        View Fullscreen
      </a>
    </li>
  );
};

export default RouterAddDataQuoteItem;
