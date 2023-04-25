import React from "react";
import ReactDOM from "react-dom";
import Calculator from "../assets/Calculator.jpg";
import Camera from "../assets/Camera.jpg";
import ColorPicker from "../assets/ColorPicker.jpg";
import Counter from "../assets/Counter.jpg";
//import * as images from "assets"

import "./Portfolio.css";

const url = "https://api.github.com/users/loisasenso/repos";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: []
    }
  };

  
  componentDidMount(){
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
          let first6 = json.filter ((i,index) => index < 6);
          this.setState({portfolios: first6});
          console.log(first6)
      })
  }

  render(){
    return (
      <div>
        <h1>Portfolio</h1>
        {this.state.portfolios.map((portfolio) => (
          <div className="portfolio_container">
            <div key={portfolio.id} className="portfolio_card">
              <article className="portfolio_item">
                  <p>Portfolio item</p>
                  <img className="portfolio_item_image" src={Calculator} alt="" />
                  <div class="portfolio_item_name" >{portfolio.name}</div>
              </article>
            </div>
            
          </div>
        ))}
        
      </div>
  
  )}


  

  
  
  
};



export default Portfolio;
