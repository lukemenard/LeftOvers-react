import React, { Component } from 'react'
import FoodCard from './FoodCard'

export default class Fridge extends Component {
    render() {
        const { foods } = this.props
        console.log(foods)

        const foodCards = () => {
            return foods.map(food => {
                return <FoodCard key={food.id} food={food} />
            })
        }

        return (
            <div>
                <h1>Fridge</h1>
                {foodCards()}
            </div>
        )
    }
}
