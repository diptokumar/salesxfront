import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import "./surveylist.css";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://salesx.herokuapp.com/api/v1/survey/"
      );
      console.log(res.data.surveys);
      setData(res.data.surveys);
    };
    fetchUsers();
  }, []);

  const columns = [
    // { field: "", headerName: "ID", width: 90 },
    {
      field: "customername",
      headerName: "customername",
      width: 200,
    },
    { field: "interestedin", headerName: "interestedin", width: 200 },
    {
      field: "customercontactno",
      headerName: "Mobile No",
      width: 120,
    },
    {
      field: "customerage",
      headerName: "Age",
      width: 160,
    },
    {
      field: "customeremail",
      headerName: "Email",
      width: 150,
    },
    {
      field: "customerbudget",
      headerName: "Budget",
      width: 150,
    },
    {
      field: "customercurrentphone",
      headerName: "Current Phone",
      width: 150,
    },
    {
      field: "pricerange",
      headerName: "Price Range",
      width: 150,
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
//small fix
