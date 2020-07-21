import React, {Component} from 'react'
import Transaction from './Transaction';

class Transactions extends Component{
    render(){
        return(
            <div className="list">
                {this.props.data.map((x,i) => <Transaction key={i} data={x} deleteTransaction={this.props.deleteTransaction}/>)}
            </div>
        )
    }
}

export default Transactions