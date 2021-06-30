import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
//import { DeleteOutline } from '@material-ui/icons';
// import { userRows } from '../../dummyData';
import { Link } from "react-router-dom";
import "./style.css";

export default function StoreList() {
  // const [data, setData] = useState(userRows);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://salesx.herokuapp.com/api/v1/comproducts/"
      );
      console.log(res.data.product);
      setData(res.data.product);
    };
    fetchUsers();
  }, []);

  const columns = [
    // { field: "_id", headerName: "ID", width: 90 },
    {
      field: "brand",
      headerName: "Brand",
      width: 200,
    },
    { field: "model", headerName: "Model", width: 200 },
    {
      field: "businessunit",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/comproducts/" + params.row._id}>
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
