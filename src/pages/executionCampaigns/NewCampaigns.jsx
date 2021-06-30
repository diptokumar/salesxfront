import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./newStore.css";

export default function NewStore() {
  const [date, setdate] = useState(new Date());
  const [campaignname, setcampaignname] = useState("");
  const [posmitems, setposmitems] = useState("");
  const [popitems, setpopitems] = useState("");
  const [displayitems, setdisplayitems] = useState("");
  const [infraitems, setinfraitems] = useState("");

  const onCreatestore = async (e) => {
    e.preventDefault();
    const execampaignname = {
      date,
      campaignname,
      posmitems,
      popitems,
      displayitems,
      infraitems,
    };
    await axios
      .post("https://salesx.herokuapp.com/api/v1/execution", execampaignname)
      .then(function (response) {
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
          <label>Date of joining</label>
          <DatePicker selected={date} onChange={(date) => setdate(date)} />
        </div>
        <div className="newUserItem">
          <label>Campaign Name</label>
          <input
            type="text"
            placeholder="Brand"
            onChange={(e) => setcampaignname(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Posmitems</label>
          <select
            className="newUserSelect"
            name="active"
            onChange={(e) => setposmitems(e.target.value)}
            id="active"
          >
            <option value="No selected">None</option>
            <option value="SEC_UNIT">future added</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>PopItems</label>
          <select
            className="newUserSelect"
            name="active"
            onChange={(e) => setpopitems(e.target.value)}
            id="active"
          >
            <option value="No selected">None</option>
            <option value="SEC_UNIT">future added</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Display Items</label>
          <select
            className="newUserSelect"
            name="active"
            onChange={(e) => setdisplayitems(e.target.value)}
            id="active"
          >
            <option value="No selected">None</option>
            <option value="SEC_UNIT">future added</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Infra Items</label>
          <select
            className="newUserSelect"
            name="active"
            onChange={(e) => setinfraitems(e.target.value)}
            id="active"
          >
            <option value="No selected">None</option>
            <option value="SEC_UNIT">future added</option>
          </select>
        </div>
        <button className="newUserButton" type="submit">
          Create Store
        </button>
      </form>
    </div>
  );
}
