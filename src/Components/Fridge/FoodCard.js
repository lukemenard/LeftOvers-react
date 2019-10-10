import React from 'react';

const FoodCard = (props) => {
    const { food } = props

    const daysToExpiration = (date) => {
        
    }

    return (
        <div>
            <h1>{food.name}</h1>
            <p>{food.expiration_date}</p>
            <p>{food.quantity} {food.quantity_unit}</p>
        </div>
    );
}

export default FoodCard;
