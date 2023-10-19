import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiPlusSquare } from "react-icons/fi"

const Add_city_modal = ({toggleValue, targetValue,citydata,setCitydata}) => {
  console.log(citydata,"citydata")
  const [search,setSearch] = useState('')
  const [data,setData] = useState()
// const data = [{city:"Hyderabad",temp:36,stared:false},{city:"Chennai",temp:36,stared:false},{city:"Bangalore",temp:36,stared:false},{city:"pune",temp:36,stared:false}]
  const Addcityonclcik = (i)=>{
  setCitydata([...citydata,i])
}
useEffect(()=>{
axios.get('http://localhost:3000/cities')
     .then(response => {
         console.log(response.data);
         setData(response.data)
     })
     .catch(error => {
         console.error("There was an error fetching the data:", error);
     });
    },[])
const searchData = data?.filter((each) => {
  return each.city.toLowerCase().includes(search.toLocaleLowerCase());
});
  return (
    <div>
      <div className='add-button-con'>
      <button type="button" class="btn btn-primary add-city-button" data-bs-toggle={toggleValue} data-bs-target={targetValue}>
      <FiPlusSquare/></button> </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"> Add City Modal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type='text' className='form-control' placeholder='Search city' onChange={(e)=>setSearch(e.target.value)} value={search}/>
        <hr/>
      </div>
      {searchData?.map((each,index)=>{
        return(
            <div className='add-city'>
                <div className='add-city-card' key={index}>
                <p className='city-title'>{each.city}</p>
                <button className='add-city-btn'onClick={()=>Addcityonclcik(each)} disabled={citydata?.filter(value=>value.city===each.city).length>0?true:false}>+</button>
                </div>
                </div>
        )
      })}
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Add_city_modal
