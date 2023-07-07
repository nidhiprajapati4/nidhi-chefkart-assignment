import React from "react";
import DishesItems from "./DishesItems";
import classes from '../Home.css';
import Card from "./Card";

const Dishes = [
    {
		"name": "Masala Mughlai",
		"rating": 4.2,
		"description": "Chicken fried in deep tomato sauce with delicious spices",
		"equipments": ["Refrigerator", "Microwave"],
		"image": "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
		"id": 1
	}, {
		"name": "Masala Paneer",
		"rating": 4.3,
		"description": "Paneer tossed in gravy",
		"equipments": ["Microwave"],
		"image": "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg",
		"id": 2
	}
];


	

const DishesList = () => {
    const foodList = Dishes.map((food) => {
      const { name, rating, description, equipments, image, id} = food;
      return (
        <DishesItems
          key={id}
          name={name}
          rating = {rating}
          description={description}
          equipments={equipments}
          image = {image}
          id={id}
        />
      );
    });
    return (
      <section className={classes.food}>
        <Card>{foodList}</Card>
      </section>
    );
  };
  
export default DishesList;
  