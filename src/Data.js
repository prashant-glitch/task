import React, { useState } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {useHistory} from 'react-router-dom';
import './Data.css';
import Axios from 'axios';
function Data()
{
  const [myname,setmyname]=useState("")
  const getmyname=()=>{
    Axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole").then(
      (response)=>{
         setmyname(response.data.first + "  "+ response.data.last);
      }
      );
  };
  let history=useHistory();
  return(
    <div className="main-div">
      <div className="center-div">
         <h1>get your name <button onClick={getmyname} >my name</button></h1>
         {myname}
       <div className="but-div">
          <button onClick={()=>{
          history.push('/Time');
          }}><NavigateBeforeIcon/></button>
          <button onClick={()=>{
          history.push('/Currency');
          }}><NavigateNextIcon/></button>
        </div>
      </div>
    </div>
  )
}
export default Data;