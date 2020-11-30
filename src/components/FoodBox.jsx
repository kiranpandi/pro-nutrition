import React, { Component } from 'react'
import './FoodBox.css'
import TodaysFood from './TodaysFood'

export default class FoodBox extends Component {

  constructor(props){
    super(props);
    this.handleCalories = this.handleCalories.bind(this);
    this.state={
      currentCalories: 0,
      todaysArr:[]
    }
    
  }
  
  handleCalories(e){
    let calories = e.target.value * this.props.calorie;
    this.setState({currentCalories:calories});
    console.log('Current Calorie',this.state.currentCalories);
  }

  handleClick = () => {
    console.log(this.props.name,this.state.currentCalories);
    // let array = this.state.todaysArr.push({name:this.props.name,calories:this.state.currentCalories})
    // let array = this.state.todaysArr;
    // array.push({name:this.props.name,calories:this.state.currentCalories})
    this.setState({todaysArr:[...this.state.todaysArr,{name:this.props.name,calories:this.state.currentCalories}]});
    
  }

    render() {
      console.log('todays arr',this.state.todaysArr);
        return (
          <>
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image">
                  <img src="https://i.imgur.com/eTmWoAN.png" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.calorie} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" onChange={this.handleCalories}/>
                  </div>
                  <div className="control">
                    <button className="button is-info" name={this.props.name} calorie={this.props.calorie} onClick={this.handleClick}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <TodaysFood arr={this.state.todaysArr}/>
          </>
        )
    }
}
