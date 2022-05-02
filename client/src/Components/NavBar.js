import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Route } from "react-router-dom";
import swal from "sweetalert";

import Home from "./InitialComponents/Home";
import Register from "./InitialComponents/Register";
import Login from "./InitialComponents/Login";
import BuildingContainer from "./BuildingComponents/BuildingContainer";
import RoomContainer from "./RoomComponents/RoomContainer";
import TenantContainer from "./TenantComponents/TenantContainer";
import UserContainer from "./UserComponents/UserContainer";
import PrivateRouter from "../helper/PrivateRouter";
import { startGetUser } from "../Redux/actions/userActions";
import { startGetBuildings } from "../Redux/actions/buildingActions";
import { startGetRooms } from "../Redux/actions/roomActions";
import { startGetTenants } from "../Redux/actions/tenantActions";

const NavBar = (props) => {
   const { userLoggedIn, handleAuth } = props;

   const dispatch = useDispatch();

   useEffect(() => {
      if (localStorage.getItem("token")) {
         handleAuth();
         dispatch(startGetUser());
         dispatch(startGetBuildings());
         dispatch(startGetRooms());
         dispatch(startGetTenants())
      }
   }, [dispatch]);

   const handleLogout = () => {
      localStorage.clear();
      handleAuth();
      swal({
         title: "Logged Out successfully",
         icon: "success",
      });
   };

   return (
      <>
         <Link to="/">Home</Link> |{" "}
         {userLoggedIn ? (
            <>
               <Link to="/user">User</Link> |{" "}
               <Link to="/buildings">Buildings</Link> |{" "}
               <Link to="/rooms">Rooms</Link> |{" "}
               <Link to="/tenants">Tenants</Link> |{" "}
               <Link to="/" onClick={handleLogout}>
                  Logout
               </Link>
            </>
         ) : (
            <>
               <Link to="/register">Register</Link> |{" "}
               <Link to="/login">Login</Link> 
            </>
         )}
         <Route path="/" component={Home} exact={true} />
         <Route path="/register" component={Register} exact={true} />
         <Route
            path="/login"
            render={(props) => {
               return <Login {...props} handleAuth={handleAuth} />;
            }}
            exact={true}
         />
         <PrivateRouter path="/user" component={UserContainer} exact={true} />
         <PrivateRouter
            path="/buildings"
            component={BuildingContainer}
            exact={true}
         />
         <PrivateRouter path="/rooms" component={RoomContainer} exact={true} />
         <PrivateRouter
            path="/tenants"
            component={TenantContainer}
            exact={true}
         />
      </>
   );
};

export default NavBar;
