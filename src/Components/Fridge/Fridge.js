import React, { Component } from 'react'
import FoodCard from './FoodCard'
import NewFoodForm from './NewFoodForm'

export default class Fridge extends Component {
    state = {
        foodForm: false
    }
    
    foodCards = () => {
        return this.props.foods.map(food => {
            return <FoodCard key={food.id} food={food} />
        })
    }

    toggleFoodForm = () => {
        this.setState({
            foodForm: !this.state.foodForm
        })
    }

    render() {
        const { foodForm } = this.state
        return (
            <div>
                {foodForm ? null : <button onClick={this.toggleFoodForm}>Add Food</button>}
                {foodForm
                ? <NewFoodForm />
                : <div><h1>Fridge</h1>{this.foodCards()}</div>
                }
            </div>
        )
    }
}
