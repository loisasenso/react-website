import React from "react";

//Import needed css files, jsx files and icons
import portfolioicon from "../assets/portfolioicon.jpg";
import Contact from "./Contact.jsx";
import "./Contact.jsx";
import "./Contact.css"
import "./Portfolio.css";

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//access github reps//
const url = "https://api.github.com/users/loisasenso/repos";



//Renders html on portfolio page and implements swiper for portfolio items//
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [],
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
      <div className="portfolio_container">
        <Swiper 
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          observer={true}
          centeredSlides={true}
          observeParents={true}
          mousewheel= {true}
          keyboard={true}
          slidesPerView= {1}
          speed={500}
          loop={true}
          touchRatio={1.5}
          navigation={true}
          effect={"flip"}
          pagination={{clickable: true}}
          className="mySwiper"
          > 
            {this.state.portfolios.map((portfolio) => {
                return (
                    <SwiperSlide key={portfolio.id} className="portfolio_card">
                      <article className="portfolio_item">
                        <div className="portfolio_item_image">
                          <img className="portfolio_image" src={portfolioicon}/>
                        </div>
                        <div className="portfolio_item_name" >{portfolio.name}</div>
                        <a href={portfolio.html_url} className="portfolio_item_button">View More</a>
                      </article>
                    </SwiperSlide> 
                  )
              })
            }
        </Swiper>
        <Contact></Contact>
      </div>
  )}   
};



export default Portfolio;
