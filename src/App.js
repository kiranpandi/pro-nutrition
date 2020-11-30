import React, { Component } from 'react'
import './App.css';
import FoodBox from './components/FoodBox'
import TodaysFood from './components/TodaysFood'

class App extends Component{
  
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        
        foods: [
          { id: '1', name: 'apple', calorie: "98", imageURL: ""},
          { id: '2', name: 'pizza', calorie: "500", imageURL: "" },
          { id: '3', name: 'orange', calorie: "150", imageURL: "" },
          { id: '4', name: 'pineapple', calorie: "125", imageURL: ""  },
        ],
        
        searchValue:'',
      };
    }

    handleChange(e){
      this.setState({searchValue:e.target.value})
      console.log('search',this.state.searchValue);
    };

    renderAll = () => {
      const foods = this.state.foods;
      const mapRow = foods.map( food => (
        <React.Fragment key={food.id}>
          <FoodBox name={food.name} calorie={food.calorie} />
        </React.Fragment>
      ));
      return mapRow;
    }
    // food.name === this.state.searchValue
    renderSearch = () => {
      const foods = this.state.foods;
      const mapRow = foods.filter( food => food.name.startsWith(this.state.searchValue) ).map( food => (
        <React.Fragment key={food.id}>
          <FoodBox name={food.name} calorie={food.calorie} />
        </React.Fragment>
      ));
      return mapRow;
    };

    render(){

      let list;
      if(this.state.searchValue == ''){
        list = this.renderAll();
      }
      else{
        list = this.renderSearch();
      }
    return (
      <div className="App">
        <div className="heading"><span className="heading-text">Pro-Nutrition</span></div>
        <div className="search">
          <h2>Search</h2>
          <input className="input" type="text" placeholder="Enter the name" onChange={this.handleChange} />
        </div>
        <div className="food-box">
          <ul>{list}</ul>
          {/* <FoodBox name="apple" calorie="150" />
          <FoodBox name="orange" calorie="100" />
          <FoodBox name="pizza" calorie="500" /> */}
        </div>
      </div>
    );
  }
  }

export default App;
