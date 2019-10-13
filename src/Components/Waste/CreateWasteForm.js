import React, { Component } from 'react'

export default class CreateWasteForm extends Component {
    state = {
        food_name: '',
        quantity: null,
        quantity_unit: '',
        value: null,
        food_category: '',
        disposal_method: '',
        disposal_reason: '',
        conversion_rate: null
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // const { addFood, toggleFoodForm } = this.props
        // addFood(this.state)
        // toggleFoodForm()
        this.setState({
            food_name: '',
            quantity: null,
            quantity_unit: '',
            value: null,
            food_category: '',
            disposal_method: '',
            disposal_reason: '',
            conversion_rate: null
        })
    }

    render() {
        const { food_name, quantity, quantity_unit, food_category, disposal_method, disposal_reason } = this.state
        return (
                <div>
                <form onSubmit={this.handleSubmit} className='new-waste-form'>
                    <h3>Add Waste</h3>
                    
                    <label>Name:</label>
                    <input type="text" name="food_name" value={food_name} onChange={this.handleChange} />
                    
                    <label>Quantity:</label>
                    <input type="number" name="quantity" min="0" step="0.1" value={quantity} onChange={this.handleChange} />
                    
                    <select name="quantity_unit" value={quantity_unit} onChange={this.handleChange}>
                            <option value="">unit</option>
                            <option value="lbs">lbs</option>
                            <option value="oz">oz</option>
                            <option value="count">count</option>
                    </select>

                    <select name="food_category" value={food_category} onChange={this.handleChange} >
                            <option value="">category</option>
                            <option value="fish">Fish</option>
                            <option value="pork">Pork</option>
                            <option value="red meat">Red Meat</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="fruit">Fruit</option>
                            <option value="dairy">Dairy</option>
                            <option value="legume">Legume</option>
                    </select>

                    <select name="disposal_method" value={disposal_method} onChange={this.handleChange} >
                            <option value="">category</option>
                            <option value="trash">Trash</option>
                            <option value="compose">Composte</option>
                            <option value="donated">Donated</option>
                    </select>

                    <select name="disposal_reason" value={disposal_reason} onChange={this.handleChange} >
                            <option value="">category</option>
                            <option value="over produced">Over Produced</option>
                            <option value="spoiled">Spoiled</option>
                            <option value="expired">Expired</option>
                    </select>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
