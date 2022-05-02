import { useDispatch } from "react-redux";

import { startEditRoom } from "../../Redux/actions/roomActions";
import RoomForm from "./RoomForm";

const RoomEditItem = (props) => {
   const { room, handleToggle } = props;

   const dispatch = useDispatch();

   const formSubmit = (formData, handleToggle, id) => {
      dispatch(startEditRoom(formData, handleToggle, id));
   };

   return (
      <>
         <h2>Edit Room</h2>
         <RoomForm
            {...room}
            handleToggle={handleToggle}
            formSubmit={formSubmit}
         />
         <button onClick={handleToggle}>Cancel</button>
      </>
   );
};

export default RoomEditItem;
