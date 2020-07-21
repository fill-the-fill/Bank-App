import React, {Component} from 'react'
// import { Link } from 'react-router-dom'

class Operations extends Component{
    constructor(){
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: ""
        }
    }

    updateInput = (event) => {
        this.setState({
            [event.target.name]: event.target.name === 'amount' ? + event.target.value : event.target.value
        })
    }

    depositTr = () => {
        this.props.addTransaction(this.state)
    }

    withdrawTr = () => {
        const t = { ...this.state }
        t.amount *= -1
        this.props.addTransaction(t)
    }

    render(){
        // console.log(this.state) === Checking if the input is working
        return(
            <div>
                <input type="number" name="amount" value={this.state.amount} placeholder="Amount" onChange={this.updateInput}></input>
                <input type="text" name="vendor" value={this.state.vendor} placeholder="Vendor" onChange={this.updateInput}></input>
                <input type="text" name="category" value={this.state.category} placeholder="Category" onChange={this.updateInput}></input><br></br>
                <div>
                <button className="btn" onClick={this.depositTr}>Deposit</button>
                <button className="btn" onClick={this.withdrawTr}>Withdraw</button>
                </div>

            </div>
        )
    }
}

export default Operations