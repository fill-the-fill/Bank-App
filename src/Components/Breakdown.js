import React, {Component} from 'react'

// import CanvasJSReact from './canvasjs.react';
// //let CanvasJSReact = require('./canvasjs.react');
// const CanvasJS = CanvasJSReact.CanvasJS;
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SumCategories extends Component{
    sumByCategoriesObj = () => {
        let table = {}
        this.props.data.forEach(element => {
            if(table[element.category]){
                table[element.category] += element.amount
            }else{
                table[element.category] = element.amount
            }
        })
        return table
    }
    render(){
        const obj = this.sumByCategoriesObj()
        const arr = Object.keys(obj)
        return(
            <div className="breakdown">
                {arr.map(element => <div>{element} {obj[element]} $ </div>)}
            </div>
        )
    }
}

export default SumCategories