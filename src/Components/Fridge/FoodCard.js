import React from 'react';

const FoodCard = (props) => {
    const { food } = props

    const dateDifference = (expirationDate) => {
        let todaysDate = new Date(Date.now()).toLocaleString().split(', ')[0]
        let splitTodaysDate = todaysDate.split('/')
        let todaysDay = parseInt(splitTodaysDate[1], 10)
        let todaysMonth = parseInt(splitTodaysDate[0], 10)
        let todaysYear = parseInt(splitTodaysDate[2], 0)
    
        let splitExpirationDate = expirationDate.split('-')
        let expirationDay = parseInt(splitExpirationDate[2], 10)
        let expirationMonth = parseInt(splitExpirationDate[1], 10)
        let expirationYear = parseInt(splitExpirationDate[0])
        
        let daysToExpiration = (expirationDay - todaysDay) + ((expirationMonth - todaysMonth) * 30) + ((expirationYear - todaysYear))
    
        return daysToExpiration * -1
    }

    return (
        <div>
            <h3>{food.name}</h3>
            <p>{dateDifference(food.expiration_date)} days</p>
            <p>{food.quantity} {food.quantity_unit}</p>
        </div>
    );
}

export default FoodCard;