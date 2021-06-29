import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
//import { DeleteOutline } from '@material-ui/icons';
// import { userRows } from '../../dummyData';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./storeList.css";

export default function StoreList() {
  // const [data, setData] = useState(userRows);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://salesx.herokuapp.com/api/v1/stores/"
      );
      console.log(res.data.data.store);
      setData(res.data.data.store);
    };
    fetchUsers();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "storename",
      headerName: "StoreName",
      width: 200,
    },
    { field: "storedmscode", headerName: "Storedmscode", width: 200 },
    {
      field: "storetype",
      headerName: "Storetype",
      width: 120,
    },
    {
      field: "location",
      headerName: "Location",
      width: 160,
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
      {/* <ul>
        {data.map((data,index)=>{
         return <li> {data.name} </li>
        })}
      </ul> */}
    </div>
  );
}
//small fix
