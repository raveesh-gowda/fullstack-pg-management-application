import { useState } from "react";
import { useSelector } from "react-redux";

import RoomItem from "./RoomItem";

const RoomList = (props) => {
   const rooms = useSelector((state) => state.rooms);
   const buildings = useSelector((state) => state.buildings);

   const [buildingId, setBuildingId] = useState("");

   const handleChange = (e) => {
      setBuildingId(e.target.value);
   };

   return (
      <>
         <h2>Listing Rooms - {rooms.length}</h2>
         {rooms.length === 0 ? (
            <>
               <h4>No rooms are added</h4>
            </>
         ) : (
            <>
               <select
                  name="buildingId"
                  value={buildingId}
                  onChange={handleChange}
               >
                  <option value="">---Select Building---</option>
                  {buildings.map((build) => (
                     <option value={build._id} key={build._id}>
                        {build.name}
                     </option>
                  ))}
               </select>
               {rooms
                  .filter((room) => room.buildingId.includes(buildingId))
                  .map((room) => (
                     <RoomItem key={room._id} room={room} />
                  ))}
            </>
         )}
      </>
   );
};

export default RoomList;
