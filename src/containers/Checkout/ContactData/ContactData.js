import React, { Component } from 'react'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: 'Bob',
            street: 'test',
            zipCode: '1234',
            country: 'UK',
            email: 'test@test.com',
            deliveryMethod: 'fastest'
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault()
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
                
        }
        axios.post('/orders.json', order).then(response => {
            this.setState({loading: false})
            this.props.history.push('/')
        }).catch(error => {
            this.setState({loading: false})
        })        
    }

    render () {
        let form = (<form>
                    <Input inputtype='input' type='text' name="name" placeholder="Your name" />
                    <Input inputtype='input' type='text' name="email" placeholder="Your email" />
                    <Input inputtype='input' type='text' name="street" placeholder="Your street" />
                    <Input inputtype='input' type='text' name="postal" placeholder="Your postal" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>)
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
