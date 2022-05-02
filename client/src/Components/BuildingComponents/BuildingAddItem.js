import { useDispatch } from "react-redux";

import BuildingForm from "./BuildingForm";
import { startAddBuilding } from "../../Redux/actions/buildingActions";

const BuildingAddItem = (props) => {
   const dispatch = useDispatch();

   const formSubmit = (formData, reset) => {
      dispatch(startAddBuilding(formData, reset));
   };

   return (
      <>
         <h2>Add Building</h2>
         <BuildingForm formSubmit={formSubmit} />
      </>
   );
};

export default BuildingAddItem;
