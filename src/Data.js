import React, { useState, useEffect } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { useHistory } from "react-router-dom";
import "./Data.css";
import axios from "axios";
function Data() {
  const [myname, setmyname] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole`,
    })
      .then((response) => {
        setmyname(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(myname);

  let history = useHistory();
  return (
    <div className="main-div">
      <div className="center-div">
        <h1>
          get your name <button>my name</button>
        </h1>
        {myname &&
          myname.map((person) => (
            <h1 key={person.email}>{person.first + " " + person.last}</h1>
          ))}
        <div className="but-div">
          <button
            onClick={() => {
              history.push("/Time");
            }}
          >
            <NavigateBeforeIcon />
          </button>
          <button
            onClick={() => {
              history.push("/Currency");
            }}
          >
            <NavigateNextIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Data;
