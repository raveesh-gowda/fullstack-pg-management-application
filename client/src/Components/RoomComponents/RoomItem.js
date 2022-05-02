import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import { startRemoveRoom } from "../../Redux/actions/roomActions";
import RoomEditItem from "./RoomEditItem";

const RoomItem = (props) => {
   const { room } = props;

   const [toggle, setToggle] = useState(false);

   const dispatch = useDispatch();

   const buildings = useSelector((state) => state.buildings);

   const building = buildings.find((build) => build._id === room.buildingId);

   const handleToggle = () => {
      setToggle(!toggle);
   };

   const handleShow = () => {
      swal(
         `
            Room Name: ${room.name}
            Buiding Name: ${building.name}
       `,
         {
            icon: "info",
         }
      );
   };

   return toggle ? (
      <RoomEditItem room={room} handleToggle={handleToggle} />
   ) : (
      <>
         <h3>{room.name}</h3>
         <button onClick={handleToggle}>Edit</button>
         <button onClick={handleShow}>Show</button>
         <button
            onClick={() => {
               dispatch(startRemoveRoom(room._id));
            }}
         >
            Delete
         </button>
      </>
   );
};

export default RoomItem;
