import axios from "axios";
import React, { useState } from "react";
import "./newProduct.css";
export default function NewUser() {
  const [devicemodel, setdevicemodel] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  const [category, setcategory] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [recomendedprice, setrecomendedrprice] = useState("");
  const [promoprice, setpromoprice] = useState("");
  const [emitenure, setemitenure] = useState("");
  const [devicevariant, setdevicevariant] = useState("");
  const [color, setcolor] = useState("");

  const onCreateproduct = async (e) => {
    e.preventDefault();
    console.log(devicemodel, month, year, category);
    const product = {
      devicemodel,
      month,
      year,
      category,
      subcategory,
      recomendedprice,
      promoprice,
      emitenure,
      devicevariant,
      color,
    };
    await axios
      .post("https://salesx.herokuapp.com/api/v1/products/", product)
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
      <h1 className="newUserTitle">New Product</h1>
      <form className="newUserForm" onSubmit={onCreateproduct}>
        <div className="newUserItem">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Product name"
            onChange={(e) => setdevicemodel(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Month</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) => setmonth(e.target.value)}
          >
            <option>Select Month</option>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Year</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) => setyear(e.target.value)}
          >
            <option>Select Year</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Category</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option>Select Category</option>
            <option value="Mobile">Mobile</option>
            <option value="tablet">Tablet</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>SubCategory</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) => setsubcategory(e.target.value)}
          >
            <option>Select sub category</option>
            <option value="EntryLevel">EntryLevel</option>
            <option value="Premium">Premium</option>
            <option value="Business">Business</option>
            <option value="superpremium">superpremium</option>
          </select>
        </div>

        <div className="newUserItem">
          <label>Recomended Price</label>
          <input
            type="text"
            placeholder="Recomended price"
            onChange={(e) => setrecomendedrprice(e.target.value)}
          />
        </div>

        <div className="newUserItem">
          <label>Promo Price</label>
          <input
            type="text"
            placeholder="Promo price"
            onChange={(e) => setpromoprice(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>EMI</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) => setemitenure(e.target.value)}
          >
            <option>Select Emi</option>
            <option value="NoEmi">No Emi</option>
            <option value="3M">3M</option>
            <option value="6M">6M</option>
            <option value="9M">9M</option>
            <option value="12M">12M</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Color</label>
          <input
            type="text"
            placeholder="black"
            onChange={(e) => setcolor(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Devicevariant</label>
          <input
            type="text"
            placeholder="deviceVariant"
            onChange={(e) => setdevicevariant(e.target.value)}
          />
        </div>

        <button className="newUserButton" type="submit">
          Create Product
        </button>
      </form>
    </div>
  );
}
