import { useSelector } from "react-redux";
import UserStatistics from "./UserStatistics";

const UserContainer = (props) => {
   const { user } = useSelector((state) => state.user);

   return (
      <>
         <h2>User Information</h2>
         <h4>Name: {user.username}</h4>
         <h4>Email: {user.email}</h4>
         <UserStatistics/>
      </>
   );
};

export default UserContainer;
