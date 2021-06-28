import React from 'react';
import './Home.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {useHistory} from 'react-router-dom';

function Home()
{
  let history=useHistory();
  return(
    <>
    <div className="home">
       <div className="buttoncontainer">
       <button onClick={()=>
      {
        history.push('/Home');
      }}><RemoveCircleIcon/></button>
       <button onClick={()=>{
         history.push('/Time');
       }}><AddCircleIcon/></button>
       </div>
    </div>
    </>
  );
}
export default Home;