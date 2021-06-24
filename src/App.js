import { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/loginPage/LoginFrom";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";


import StoreList from "./pages/storeList/StoreList";

function App() {
  const { user } = useContext(AuthContext);
  
  console.log(user);
  return (
    <Router>
      
      <div className="container">
        {user && <Sidebar />}
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          
          <Route path="/newStore">
            <NewStore />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
