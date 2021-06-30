import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Timeline,
  WorkOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <Topbar />
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">User</h3>
            <ul className="sidebarList">
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to="/newUser" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  NewUser
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Store</h3>
            <ul className="sidebarList">
              <Link to="/store" className="link">
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Store
                </li>
              </Link>
              <Link to="/newStore" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  NewStore
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Product</h3>
            <ul className="sidebarList">
              <Link to="/products" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <Link to="/newproduct" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  New Product
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Sales</h3>
            <ul className="sidebarList">
              <Link to="/sales" className="link">
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Sales
                </li>
              </Link>
              <Link to="/salestarget" className="link">
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Salestarget
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Survey</h3>
            <ul className="sidebarList">
              <Link to="/survey" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Survey
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Compititive Product</h3>
            <ul className="sidebarList">
              <Link to="/competitiveprod" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Compititive Product
                </li>
              </Link>
              <Link to="/newcompetitiveprod" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  New Compititive Product
                </li>
              </Link>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Attendance
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Usage
              </li>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
