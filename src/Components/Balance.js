import React, { Component } from 'react';
import '../App.css'

class Balance extends Component {
    render() {
        const summ = this.props.transactions.map(t => t.amount)
        const balance = summ.length ? summ.reduce((a, b) => a + b) : 0
        return (
            <div className='balance'>
                <p>Balance: <span style={{ color: balance > 0 ? 'green' : 'red' }}>${balance}</span></p>
            </div>
        )
    }
}

export default Balance;