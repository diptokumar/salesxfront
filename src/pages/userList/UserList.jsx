import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./userList.css";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios.get('https://salesx.herokuapp.com/api/v1/users/').then(res => {
    //  console.log(res.data.data.users);
    //  setData1(res.data.data.users);
    // })
    const fetchUsers = async () => {
      const res = await axios.get("https://salesx.herokuapp.com/api/v1/users/");
      console.log(res.data.users);
      setData(res.data.users);
    };
    fetchUsers();
  }, []);

  const columns = [
    // { field: "", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "UserName",
      width: 200,
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "workingstatus",
      headerName: "Status",
      width: 120,
    },
    {
      field: "role",
      headerName: "User Type",
      width: 160,
    },
    {
      field: "businessunit",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" />
          </>
        );
      },
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
      {/* <ul>
        {data.map((data,index)=>{
         return <li> {data.name} </li>
        })}
      </ul> */}
    </div>
  );
}
//small fix
