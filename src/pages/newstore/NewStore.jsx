import "./newStore.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import axios from "axios";
import TimePicker from "react-time-picker";

export default function NewStore() {
  const [storename, setstorename] = useState("");
  const [storeDmsCode, setstoreDmsCode] = useState("");
  const [location, setlocation] = useState("");
  const [teritory, setTerritory] = useState("");
  const [area, setArea] = useState("");
  const [district, setDistrict] = useState("");
  const [division, setDivision] = useState("");
  const [cutoofftime, setCutoftime] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  //inventory would be join
  console.log(storename,
    storeDmsCode,
    location,
    teritory,
    area,
    district,
    division,
    lat,
    lon,);
  const onCreatestore = async (e) => {
    e.preventDefault();
    const store = {
      storename,
      storeDmsCode,
      location,
      teritory,
      area,
      district,
      division,
      lat,
      lon,
    };
     await axios.post("http://salesx.herokuapp.com/api/v1/stores/", store).then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
   
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Store Create</h1>
      <form className="newUserForm" onSubmit={onCreatestore}>
        <div className="newUserItem">
          <label>StoreName</label>
          <input
            type="text"
            placeholder="StoreName"
            onChange={(e) => setstorename(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Store DMS code</label>
          <input
            type="text"
            placeholder="EM034"
            onChange={(e) => setstoreDmsCode(e.target.value)}
          />
        </div>

        <div className="newUserItem">
          <label>Location</label>
          <input
            type="text"
            placeholder="location"
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>

        <div className="newUserItem">
          <label>Teritory</label>
          <input
            type="text"
            placeholder="Teritory"
            onChange={(e) => setTerritory(e.target.value)}
          />
        </div>

        <div className="newUserItem">
          <label>District</label>
          <input
            type="text"
            placeholder="Office mail"
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>

        <div className="newUserItem">
          <label>Area</label>
          <input
            type="text"
            placeholder="Area"
            onChange={(e) => setArea(e.target.value)}
          />
        </div>

        <div className="newUserItem">
          <label>division</label>
          <input
            type="text"
            placeholder="remarks"
            onChange={(e) => setDivision(e.target.value)}
          />
        </div>
        
      
        
        {/* <div className="newUserItem">
            <label>Cut off Time</label> 
          <TimePicker onChange={setCutoftime} value={cutoofftime} />
        </div> */}

        <div className="newUserItem">
          <label>Lat</label>
          <input
            type="text"
            placeholder="Manger"
            onChange={(e) => setLat(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Lon</label>
          <input type="text" placeholder="remarks" onChange={(e)=> setLon(e.target.value)} />
        </div>
        <button className="newUserButton" type="submit">
          Create Store
        </button>
      </form>
    </div>
  );
}
