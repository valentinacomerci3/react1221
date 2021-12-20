
import FoodOrderFormInput from '../../UI/FoodOrderFormItemInput';
import classes from './FoodOrderFormItem.module.css';

const FoodOrderFormMealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <FoodOrderFormInput
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default FoodOrderFormMealItemForm;
