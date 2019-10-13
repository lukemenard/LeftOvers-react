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
import CreateWasteForm from '../Waste/CreateWasteForm'

export default class FoodCard extends Component {
    state = {
        editForm: false,
        wasteForm: false
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

    toggleWasteForm = () => {
        this.setState({
            wasteForm: !this.state.wasteForm
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
                {this.state.wasteForm
                ? <CreateWasteForm food={food} toggleWasteForm={this.toggleWasteForm} />
                : null
                }
                {this.state.editForm 
                ? <EditFoodForm food={food} toggleEditForm={this.toggleEditForm} updateFood={updateFood}/> 
                : 
                <div>
                    <div className='food-card-header'>
                        <h3 className={`food-card-title ${this.dynamicHeaderColor(food.expiration_date)}`}>{food.food_name}</h3>
                    </div>
                    <img className='food-card-delete-button' onClick={() => deleteFood(food.id)} src='https://image.flaticon.com/icons/svg/59/59836.svg' alt='delete button' />
                    <p>{this.dateDifference(food.expiration_date)} days</p>
                    <p>{food.quantity} {food.quantity_unit}</p>
                    <img className='food-card-edit-button' onClick={() => this.toggleEditForm()} src='https://image.flaticon.com/icons/svg/1159/1159633.svg' alt='update button' />
                    <img className='food-card-waste-button' onClick={() => this.toggleWasteForm()} src='https://image.flaticon.com/icons/svg/149/149343.svg' alt='waste button' />
                </div>
            }
            </div>
        )
    }
}
