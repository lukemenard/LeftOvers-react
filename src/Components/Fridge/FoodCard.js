// import React from 'react';

// const FoodCard = (props) => {
//     const { food, deleteFood, toggleEditForm } = props

//     const dateDifference = (expirationDate) => {
//         let todaysDate = new Date(Date.now()).toLocaleString().split(', ')[0]
//         let splitTodaysDate = todaysDate.split('/')
//         let todaysDay = parseInt(splitTodaysDate[1], 10)
//         let todaysMonth = parseInt(splitTodaysDate[0], 10)
//         let todaysYear = parseInt(splitTodaysDate[2], 0)
//         // debugger
//         let splitExpirationDate = expirationDate.split('-')
//         let expirationDay = parseInt(splitExpirationDate[2], 10)
//         let expirationMonth = parseInt(splitExpirationDate[1], 10)
//         let expirationYear = parseInt(splitExpirationDate[0])
        
//         let daysToExpiration = (expirationDay - todaysDay) + ((expirationMonth - todaysMonth) * 30) + ((expirationYear - todaysYear))
    
//         return daysToExpiration
//     }

//     return (
//         <div>
//             <h3>{food.food_name}</h3>
//             <p>{dateDifference(food.expiration_date)} days</p>
//             <p>{food.quantity} {food.quantity_unit}</p>
//             <button onClick={() => deleteFood(food.id)}>Delete</button>
//             <button onClick={() => toggleEditForm()}>Edit</button>
//             {editForm ? <EditFoodForm/> : null}
//         </div>
//     );
// }

// export default FoodCard;

import React, { Component } from 'react'
import EditFoodForm from './EditFoodForm'

export default class FoodCard extends Component {
    state = {
        editForm: false
    }

        dateDifference = (expirationDate) => {
        let todaysDate = new Date(Date.now()).toLocaleString().split(', ')[0]
        let splitTodaysDate = todaysDate.split('/')
        let todaysDay = parseInt(splitTodaysDate[1], 10)
        let todaysMonth = parseInt(splitTodaysDate[0], 10)
        let todaysYear = parseInt(splitTodaysDate[2], 0)
        // debugger
        let splitExpirationDate = expirationDate.split('-')
        let expirationDay = parseInt(splitExpirationDate[2], 10)
        let expirationMonth = parseInt(splitExpirationDate[1], 10)
        let expirationYear = parseInt(splitExpirationDate[0])
        
        let daysToExpiration = (expirationDay - todaysDay) + ((expirationMonth - todaysMonth) * 30) + ((expirationYear - todaysYear))
    
        return daysToExpiration
    }
    
    toggleEditForm = () => {
        this.setState({
            editForm: !this.state.editForm
        })
    }

    dynamicHeaderColor = (date) => {
        const days = this.dateDifference(date)
        if(days < 4){
            return 'header-red'
        } else if (days > 3 && days < 7){
            return 'header-yellow'
        } else {
            return 'header-green'
        }
    }

    render() {
        const { food, deleteFood, updateFood } = this.props
        console.log(food)
        return (
            <div className='food-card'>
                {this.state.editForm 
                ? <EditFoodForm food={food} toggleEditForm={this.toggleEditForm} updateFood={updateFood}/> 
                : 
                <div>
                    <div className='food-card-header'>
                        <h3 className={`food-card-title ${this.dynamicHeaderColor(food.expiration_date)}`}>{food.food_name}</h3>
                    </div>
                    <p>{this.dateDifference(food.expiration_date)} days</p>
                    <p>{food.quantity} {food.quantity_unit}</p>
                    <button className='edit-button' onClick={() => this.toggleEditForm()}>Edit</button>
                    <button onClick={() => deleteFood(food.id)}>Delete</button>
                </div>
            }
            </div>
        )
    }
}
