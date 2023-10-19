import React from 'react'
import Add_city_modal from './Add_city_modal'
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
const Add_Favorite = ({starData,citydata,setCitydata,starHandler}) => {
  return (
    <div className='add'>
      <div className='add-sub' >
        <h2 className='favorite-city'>My Favorite Cities</h2>
        <Add_city_modal toggleValue={"modal"} targetValue={"#exampleModal"} citydata={citydata} setCitydata={setCitydata}/>
        </div>
        <hr/>
        <div className='favorite-main-con'>
        {starData.map((each)=>{
        return(
          <div className='favorite-details'>
            <div className='favorite-details-sub'>
          <h5 className='favorite-city-name'>{each.city}</h5>
          <button className="star-btn" onClick={() => starHandler(each)}>
                {each.stared === true ? <AiFillStar /> : <AiOutlineStar />}
              </button>
              </div>
              <p className='weather-details'>Temperature : {each.temp} °C | °F</p>
              <p className='weather-details'>Humidity : {each.humidity} %</p>
              <p className='weather-details'>Precipitation: {each.Precipitation} %</p>
              <p className='weather-details'>Wind: {each.wind} km/h</p>
          </div>
        )
      })}
      </div>
      
      
    </div>
  )
}

export default Add_Favorite
