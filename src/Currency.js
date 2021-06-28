import React,{useState} from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './Currency.css'
import { SettingsCellRounded } from '@material-ui/icons';
function Currency()
{
 
  const [first,setFirst]=useState("");
  const [second,setSecond]=useState("");
  const [rate,setRate]=useState([]);

  const getRate=(first,second)=>{
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`
    })
    .then((response)=>{
      setRate(response.data);
    })
    .catch((error)=>
    {
     console.log(error);
    });
  };

  let history=useHistory(); 
  return(
    <>
     <div className="main-div">
       <div className="center-div">
         <p>1 {first} ={rate[`${first}_${second}`]}{second}</p>
         <br/>
         <input type="text" value={first} onChange={(e)=>setFirst(e.target.value)}
          />
         <input type="text" value={second} onChange={(e)=>setSecond(e.target.value)} />
         <button onClick={getRate(first,second)}> convertor</button>
         <br/>
       <div className="but-div">
          <button onClick={()=>{
          history.push('/Data');
          }}><NavigateBeforeIcon/></button>
          <button onClick={()=>{
          history.push('/Home');
          }}><NavigateNextIcon/></button>
        </div>
        </div>
     </div>
    </>
  );
}
export default Currency;