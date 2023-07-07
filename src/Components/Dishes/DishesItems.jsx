import React from 'react';
import classes from '../Home.css';

const DishesItems = (props) => {
  const { name, rating, description, equipments, images, id } = props;

  return (
    <li className={classes.food}>
      <div>
        <h3>{name}</h3>
        <div>{rating}</div>
        <div className={classes.description}>{description}</div>
        <div>{equipments}</div>
        <div>{images}</div>
        <div>{id}</div>
      </div>
    </li>
  );
};

export default DishesItems;
