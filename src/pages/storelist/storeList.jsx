import './storeList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
// import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function StoreList() {
  // const [data, setData] = useState(userRows);
  const [data, setData] = useState([]);
  useEffect(() =>{
      // axios.get('https://salesx.herokuapp.com/api/v1/users/').then(res => {
      //  console.log(res.data.data.users);
      //  setData1(res.data.data.users);
      // })
      const fetchUsers = async ()=> {
        const res = await axios.get('https://salesx.herokuapp.com/api/v1/stores/');
        console.log(res.data.data.store)
        setData(res.data.data.store)
      }
      fetchUsers()
  },[])

  // {data1.map((data,index)=>{
  //        return <li> {data} </li>
  //       })}

  // console.log(data1.users[0].name);

  // console.log(datacd);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'storename',
      headerName: 'StoreName',
      width: 200,
      // renderCell: (params) => {
      //   return (
      //     <div className="userListUser">
      //       <img className="userListImg" src={params.row.avatar} alt="" />
      //       {params.row.username}
      //     </div>
      //   );
      // },
    },
    { field: 'storedmscode', headerName: 'Storedmscode', width: 200 },
    {
      field: 'storetype',
      headerName: 'Storetype',
      width: 120,
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 160,
    },
    // {
    //   field: 'teritory',
    //   headerName: 'Teritory',
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={'/user/' + params.row._id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="userListDelete"
              
    //         />
    //       </>
    //     );
    //   },
    // },
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