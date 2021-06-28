
import React, { useState } from 'react';
import './Time.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {useHistory} from 'react-router-dom';
let time=new Date().toLocaleTimeString();

function Time()
{
const [ct,setct]=useState(time);

const ntime=()=>{
  time=new Date().toLocaleTimeString();
  setct(time);
}

setInterval(ntime,1000);
let history=useHistory();
  return(
    <>
      <div className="datepage">
      <div className="time">
         <h3> {ct}</h3>
         <div className="navigator">
         <button onClick={()=>{
         history.push('/Home');
       }}><NavigateBeforeIcon/></button>
         <button onClick={()=>{
         history.push('/Data');
       }}><NavigateNextIcon/></button>
         </div>
        </div>
        </div>
    </>
  );
}
export default Time;