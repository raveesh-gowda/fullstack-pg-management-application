import { useDispatch } from "react-redux";

import RoomForm from "./RoomForm";
import { startAddRoom } from "../../Redux/actions/roomActions";

const RoomAddItem = (props) => {
   const dispatch = useDispatch();

   const formSubmit = (formData) => {
      dispatch(startAddRoom(formData));
   };

   return (
      <>
         <h2>Add Room</h2>
         <RoomForm formSubmit={formSubmit} />
      </>
   );
};

export default RoomAddItem;
