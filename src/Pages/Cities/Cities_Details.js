import React, {  } from "react";
import "./Cities.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Add_city_modal from "../Add_Favorite/Add_city_modal";
const Cities_Details = ({ citydata, setCitydata,starData,setstarData,setSubdata,subdata,starHandler }) => {
  console.log(citydata,"cities_details")
  const dataAdd = (i) => {
    setSubdata([i]);
  };
  return (
    <div className="main-con">
      <div className="city">
        <div className="sub-city-con">
          <h4 className="title-1">Cities</h4>
          <Add_city_modal
            toggleValue={"modal"}
            targetValue={"#exampleModal"}
            citydata={citydata}
            setCitydata={setCitydata}
          />
        </div>
        <hr/>
        <div>
          {citydata.map((each) => {
            return (
              <div className="city-details-card" onClick={() => dataAdd(each)}>
                <h6>{each.city}</h6>
                <p>{each.temp} °C</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="details-con">
        {subdata?.map((each) => {
          return (
            <div>
            <div className="sub-details">
              <h4 className="city-name">{each.city}</h4>
              <button className="star-btn" onClick={() => starHandler(each)}>
                {each.stared === true ? <AiFillStar /> : <AiOutlineStar />}
              </button>
            </div>
            <hr/>
            <div>
            <h3 className="text-center city-weather-details">Temperature : {each.temp} °C | °F</h3>
              <h3 className='text-center city-weather-details'>Humidity : {each.humidity} %</h3>
              <h3 className='text-center city-weather-details'>Precipitation: {each.Precipitation} %</h3>
              <h3 className='text-center city-weather-details'>Wind: {each.wind} km/h</h3>
              </div>
            </div>
          );
        })}
      </div>
     </div>
  );
};

export default Cities_Details;
