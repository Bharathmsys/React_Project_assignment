import './App.css';
import React, { useState } from 'react'
import Home from './Pages/Home/Home';
import Cities from './Pages/Cities/Cities';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add_Favorite/Add_Favorite'
import Cities_Details from './Pages/Cities/Cities_Details';
function App() {
  const[citydata,setCitydata] = useState([])
  const [starData, setstarData] = useState([]);
  const [subdata, setSubdata] = useState();

  const starHandler = (value) => {
    value.stared = !value.stared;
    setSubdata([value]);
    const starredArr = citydata?.filter((item) => item.stared === true);
    setstarData(starredArr);
    
  };
  return (
    <div className='con'>
    <div className='Home-cities'>
<Home/>
<Cities/>
</div>
<div>
<Routes>
  <Route path='/' element={<Add starData={starData} citydata={citydata} setCitydata={setCitydata} starHandler={starHandler}/>} />
  <Route path='/Cities' element ={<Cities_Details citydata={citydata} setCitydata={setCitydata} starData={starData} setstarData={setstarData} setSubdata={setSubdata} subdata={subdata} starHandler={starHandler}/>}/>
</Routes>
</div>
    </div>
  );
}

export default App;
