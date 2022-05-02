import { useSelector } from "react-redux";

const UserStatistics = (props) => {
   const { buildings, rooms, tenants } = useSelector((state) => state);

   return (
      <>
         <h2>Statistics</h2>
         <h4>Total Buildings - {buildings.length}</h4>
         <h4>Total Rooms - {rooms.length}</h4>
         <h4>Total Tenants - {tenants.length}</h4>
      </>
   );
};

export default UserStatistics;
