import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import "./salestarget.css";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://salesx.herokuapp.com/api/v1/salestarget/"
      );
      console.log(res.data.salestarget);
      setData(res.data.salestarget);
    };
    fetchUsers();
  }, []);

  const columns = [
    // { field: "_id", headerName: "ID", width: 90 },
    {
      field: "storename",
      headerName: "storename",
      width: 200,
    },
    {
      field: "salestargetinvolume",
      headerName: "salestarget (in volume)",
      width: 200,
    },
    {
      field: "actualsalesinvolume",
      headerName: "actualsales (in volume)",
      width: 120,
    },
    {
      field: "salestargetinvalue",
      headerName: "salestarget (in value)",
      width: 160,
    },
    {
      field: "actualsales (in value)",
      headerName: "storedetails",
      width: 150,
    },
    {
      field: "storedetails",
      headerName: "Store Details",
      width: 160,
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
