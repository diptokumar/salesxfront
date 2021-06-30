import axios from "axios";
import React, { useState } from "react";
import "./NewWpsurvey.css";

export default function NewStore() {
  const [question, setquestion] = useState("");
  const [option, setoption] = useState("");

  //inventory would be join
  const onCreatecomproduct = async (e) => {
    e.preventDefault();
    const wpsurvey = {
      question,
      option,
    };
    await axios
      .post("https://salesx.herokuapp.com/api/v1/wpsurvey", wpsurvey)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Compititive product Create</h1>
      <form className="newUserForm" onSubmit={onCreatecomproduct}>
        <div className="newUserItem">
          <label>Question</label>
          <input
            type="text"
            placeholder="Brand"
            onChange={(e) => setquestion(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Model</label>
          <input
            type="text"
            placeholder="Model"
            onChange={(e) => setoption(e.target.value)}
          />
        </div>

        <button className="newUserButton" type="submit">
          Create Workplace Survey
        </button>
      </form>
    </div>
  );
}
