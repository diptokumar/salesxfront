import { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { AuthContext } from "./context/AuthContext";
import CompititiveProd from "./pages/compititiveprodPage/CompititiveProduct";
import NewCompititiveprod from "./pages/compititiveprodPage/NewcomProduct";
import Home from "./pages/home/Home";
import Login from "./pages/loginPage/LoginFrom";
import NewProduct from "./pages/newProduct/NewProduct";
import NewStore from "./pages/newstore/NewStore.jsx";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import SalesList from "./pages/salesPage/SalesList";
import Salestarget from "./pages/salestargetPage/Salestarget";
import StoreList from "./pages/storelist/storeList.jsx";
import SurveyList from "./pages/surveysPage/SurveyList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";



function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      
      <div className="container">
        {user && <Sidebar />}
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/home">
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/newStore">
            {user ? <NewStore /> : <Login />}
           
          </Route>
          <Route path="/store">
            {user ? <StoreList /> : <Login />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/users/:id">
            {user ? <User /> : <Login />}
           
          </Route>
          <Route path="/users">
            {user ? <UserList /> : <Login />}
          </Route>
          <Route path="/newUser">
            {user ? <NewUser /> : <Login />}   
          </Route>
          <Route path="/products">
            {user ? <ProductList /> : <Login />}    
          </Route>
          <Route path="/sales">
            {user ? <SalesList />: <Login />}
          </Route>
          <Route path="/salestarget">
            {user ? <Salestarget /> : <Login />}
          </Route>
          <Route path="/survey">
            {user ? <SurveyList /> : <Login />}
          </Route>          
          <Route path="/product/:productId">
            {user ? <Product /> : <Login />}
          </Route>
          <Route path="/newproduct">
            {user ? <NewProduct />: <Login />}
          </Route>
          <Route path="/competitiveprod">
            {user ? <CompititiveProd /> : <Login />}
          </Route>
          <Route path="/newcompetitiveprod">
            {user ? <NewCompititiveprod /> : <Login />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
