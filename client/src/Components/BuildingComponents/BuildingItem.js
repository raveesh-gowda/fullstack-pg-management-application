import { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

import BuildingEdit from "./BuildingEdit";
import { startRemoveBuilding } from "../../Redux/actions/buildingActions";

const BuildingItem = (props) => {
   const { building } = props;

   const dispatch = useDispatch();

   const [toggle, setToggle] = useState(false);

   const handleShow = () => {
      swal(
         `
                Name : ${building.name}
                LandMark : ${building.landmark}
                Address : ${building.address}
            `,
         {
            icon: "info",
         }
      );
   };

   const handleToggle = () => {
      setToggle(!toggle);
   };

   return toggle ? (
      <BuildingEdit handleToggle={handleToggle} building={building} />
   ) : (
      <>
         <h3>{building.name}</h3>
         <button onClick={handleToggle}>Edit</button>
         <button onClick={handleShow}>Show</button>
         <button
            onClick={() => {
               dispatch(startRemoveBuilding(building._id));
            }}
         >
            Delete
         </button>
      </>
   );
};

export default BuildingItem;
