import React, { Component } from 'react'
import FoodCard from './FoodCard'
import NewFoodForm from './NewFoodForm'

export default class Fridge extends Component {
    state = {
        foodForm: false
    }
    
    foodCards = () => {
        if (this.props.foods.count !== 0){
        return this.props.foods.map(food => {
            return <FoodCard key={food.id} food={food} deleteFood={this.props.deleteFood} updateFood={this.props.updateFood} />
        })} else {
            return null
        }
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
                {foodForm ? <NewFoodForm addFood={this.props.addFood} toggleFoodForm={this.toggleFoodForm} /> : null}
                <div>
                    <h1>Fridge</h1>
                    {this.foodCards()}
                </div>
            </div>
        )
    }
}
