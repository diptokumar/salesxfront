import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import "./saleslist.css";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://salesx.herokuapp.com/api/v1/sales/");
      console.log(res.data.sales);
      setData(res.data.sales);
    };
    fetchUsers();
  }, []);

  const columns = [
    // { field: "", headerName: "ID", width: 90 },
    {
      field: "storename",
      headerName: "storename",
      width: 200,
    },
    { field: "username", headerName: "username", width: 200 },
    {
      field: "managername",
      headerName: "managername",
      width: 120,
    },
    {
      field: "customername",
      headerName: "customername",
      width: 160,
    },
    {
      field: "customercono",
      headerName: "customercono",
      width: 150,
    },
    {
      field: "customercono",
      headerName: "customercono",
      width: 150,
    },
    {
      field: "customeremail",
      headerName: "customeremail",
      width: 150,
    },
    {
      field: "color",
      headerName: "color",
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
