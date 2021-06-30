import axios from "axios";
import React, { useState } from "react";
import "./nwecomProduct.css";

export default function NewStore() {
  const [brand, setbrand] = useState("");
  const [model, setmodel] = useState("");

  //inventory would be join
  const onCreatecomproduct = async (e) => {
    e.preventDefault();
    const comproducts = {
      brand,
      model,
    };
    await axios
      .post("https://salesx.herokuapp.com/api/v1/comproducts", comproducts)
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
      <h1 className="newUserTitle">New Compititive product Create</h1>
      <form className="newUserForm" onSubmit={onCreatecomproduct}>
        <div className="newUserItem">
          <label>Brand</label>
          <input
            type="text"
            placeholder="Brand"
            onChange={(e) => setbrand(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Model</label>
          <input
            type="text"
            placeholder="Model"
            onChange={(e) => setmodel(e.target.value)}
          />
        </div>

        <button className="newUserButton" type="submit">
          Create Product
        </button>
      </form>
    </div>
  );
}
