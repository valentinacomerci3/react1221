import FoodOrderAddModalCard from '../UI/FoodOrderAddModalCard';
import FoodOrderAddModalMealItem from './MealItem/FoodOrderAddModalMealItem';
import classes from './FoodOrderAddModalAvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const FoodOrderAddModalAvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <FoodOrderAddModalMealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <FoodOrderAddModalCard>
        <ul>{mealsList}</ul>
      </FoodOrderAddModalCard>
    </section>
  );
};

export default FoodOrderAddModalAvailableMeals;
