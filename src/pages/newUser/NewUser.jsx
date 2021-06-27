import "./newUser.css";
import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";



export default function NewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [dob, setDob] = useState(new Date());
  const [joiningdate, setDateofjoining] = useState(new Date());
  const [mobileno, setMobile] = useState("");
  const [businessunit, setBusinessunit] = useState("");
  const [usertype, setuserType] = useState("");
  const [area, setArea] = useState("");
  const [teritory, setTerritory] = useState("");
  const [lmid, setLMid] = useState("");
  const [smid, setSmid] = useState("");
  const [tlid, setTlid] = useState("");
  const [role, setRole] = useState("");
  const [workingstatus, setWorkingStatus] = useState("");
  const [salary, setSalary] = useState("");
  const [remark, setRemark] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [officemail, setofficemail] = useState("");

  const onCreateUser = async (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      mobileno,
      passwordConfirm,
      officemail,
      usertype,
      salary,
      lmid,
      area,
      role,
      dob,
      joiningdate,
      employeeId,
      businessunit,
      remark

    };
    await axios.post("https://salesx.herokuapp.com/api/v1/users/", user);
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={onCreateUser}>
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="john"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>EmployeeID</label>
          <input
            type="text"
            placeholder="EM034"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+8801876121212"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        {/* <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div> */}
        {/* <div className="newUserItem">

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        <div className="newUserItem">
          <label>officemail</label>
          <input
            type="text"
            placeholder="Office mail"
            onChange={(e) => setofficemail(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Salary Tier</label>
          <input
            type="text"
            placeholder="Salary Tier"
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Date of Birth</label>
          <DatePicker selected={dob} onChange={(date) => setDob(date)} />
        </div>
        <div className="newUserItem">
          <label>Date of joining</label>
          <DatePicker selected={joiningdate} onChange={(date) => setDateofjoining(date)} />
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
          <label>Teritory</label>
          <input
            type="text"
            placeholder="teritory"
            onChange={(e) => setTerritory(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Remarks</label>
          <input
            type="text"
            placeholder="remarks"
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>officemail</label>
          <input type="text" placeholder="Office mail" />
        </div>
        <div className="newUserItem">
          <label>Area</label>
          <input type="text" placeholder="Area" />
        </div>
        <div className="newUserItem">
          <label>Teritory</label>
          <input type="text" placeholder="teritory" />
        </div>
        <div className="newUserItem">
          <label>Remarks</label>
          <input type="text" placeholder="remarks" />
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(e) => setWorkingStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Type</label>
          <select
            className="newUserSelect"
            name="active"
            onChange={(e) => setRole(e.target.value)}
            id="active"
          >
            <option value="admin">Admin</option>
            <option value="SEC">SEC</option>
            <option value="SOM">SOM</option>
            <option value="AM">AM</option>
            <option value="TSO">TSO</option>
            <option value="LOGISTIC">LOGISTIC-M</option>
            <option value="VM">VM</option>
            <option value="TRAINER">TRAINER</option>
            <option value="SM">SM</option>
            <option value="OM">OM</option>
            <option value="FOE">FOE</option>
            <option value="MIS">MIS</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Businessunit</label>
          <select
            className="newUserSelect"
            name="active"
            onChange={(e) => setRole(e.target.value)}
            id="active"
          >
            <option value="SEC_UNIT">Consultant Service</option>
            <option value="CE_UNIT">Consumer Electornic</option>
            <option value="VM">Visual Merchandising</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Manager</label>
          {/* <select className="newUserSelect" name="active" id="active">
            <option value="yes">Siraj hassan</option>
            <option value="no">rony halder</option>
            <option value="no">joy bormon</option>          
          </select> */}
          <input
            type="text"
            placeholder="Manger"
            onChange={(e) => setSmid(e.target.value)}
          />
        </div>
        {/* <div className="newUserItem">
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Admin</option>
            <option value="no">SEC</option>
            <option value="no">SOM</option>
            <option value="no">AM</option>
            <option value="no">TSO</option>
            <option value="no">LOGISTIC-M</option>
            <option value="no">VM</option>
            <option value="no">TRAINER</option>
            <option value="no">MIS</option>
          
          </select>
        </div>
        <div className="newUserItem">
          <label>Maneger</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Siraj hassan</option>
            <option value="no">rony halder</option>
            <option value="no">joy bormon</option>          
          </select>
        </div>
        <div className="newUserItem">
          <label>store</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">E M store</option>
            <option value="no">SM Electornic</option>
            <option value="no">Walltone</option>          
          </select>
        </div> */}
        <button className="newUserButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
