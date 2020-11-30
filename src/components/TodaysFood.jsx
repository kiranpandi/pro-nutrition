import React, { Component } from 'react'
import './TodaysFood.css'

export default class TodaysFood extends Component {
    render() {
        // let todayList = this.props.arr ? (<div><div>{this.props.arr[0]}</div> 
        // <div>{this.props.arr[1]}</div>
        // </div>) : null;
        console.log('arr',this.props.arr);
        let {arr} = {...this.props};
        let html = arr.length > 1 ? (
            <div>
                <div>{arr[0]}</div>
                <div>{arr[1]}</div>

                <div>{arr[2]}</div>

            </div>
        ) :null;
        return (
            <div className="todays-food">
                Today's Food 
                {html}
            </div>
      
        )
    }
}
