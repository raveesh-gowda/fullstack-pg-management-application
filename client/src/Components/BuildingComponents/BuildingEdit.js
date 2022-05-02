import { useDispatch } from "react-redux";

import BuildingForm from "./BuildingForm";
import { startEditBuilding } from "../../Redux/actions/buildingActions";

const BuildingsEditItem = (props) => {
   const { handleToggle, building } = props;

   const dispatch = useDispatch();

   const formSubmit = (formData, _id) => {
      dispatch(startEditBuilding(formData, _id, handleToggle));
   };

   return (
      <>
         <h2>Edit Building</h2>
         <BuildingForm {...building} formSubmit={formSubmit} />
         <button onClick={handleToggle}>Cancel</button>
      </>
   );
};

export default BuildingsEditItem;
