import React, {Component} from 'react'



class Transaction extends Component{
    deleteTransaction = () => {
       const id = this.props.data._id
        this.props.deleteTransaction(id)
    }
    render(){
        const data = this.props.data
        return(
            <div className="transaction">
                <li className={data.amount > 0 ? "green" : "red"}>
                    {data.amount} {data.vendor} {data.category}
                    <button className="delete-btn"  onClick={this.deleteTransaction}>Delete <i class="fas fa-trash-alt"></i></button>
                </li>
            </div>
        )
    }
}

export default Transaction