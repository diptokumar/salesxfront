import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./notice.css";

export default function NewStore() {
  const [date, setdate] = useState(new Date());
  const [noticefor, setnoticefor] = useState("");
  const [description, setdescription] = useState("");
  const [users, setusers] = useState("");

  const onCreatenotice = async (e) => {
    e.preventDefault();
    const notice = {
      date,
      noticefor,
      description,
      users,
    };
    await axios
      .post("https://salesx.herokuapp.com/api/v1/notice", notice)
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
      <form className="newUserForm" onSubmit={onCreatenotice}>
        <div className="newUserItem">
          <label>Notice For</label>
          <select
            className="newUserSelect"
            name="active"
            onChange={(e) => setnoticefor(e.target.value)}
            id="active"
          >
            <option value="No selected">None</option>
            <option value="Training">Training</option>
            <option value="Information">Information</option>
            <option value="Holiday">Holiday</option>
          </select>
        </div>

        <div className="newUserItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Dat</label>
          <DatePicker selected={date} onChange={(date) => setdate(date)} />
        </div>
        <div className="newUserItem">
          <label>User</label>
          <input
            type="text"
            placeholder="Users"
            onChange={(e) => setusers(e.target.value)}
          />
        </div>
        <button className="newUserButton" type="submit">
          Create Store
        </button>
      </form>
    </div>
  );
}
