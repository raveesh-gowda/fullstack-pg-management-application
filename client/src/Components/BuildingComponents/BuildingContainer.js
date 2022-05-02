import BuildingList from "./BuildingList";
import BuildingAddItem from "./BuildingAddItem";

const BuildingContainer = (props) => {
   return (
      <>
         <BuildingAddItem />
         <BuildingList />
      </>
   );
};

export default BuildingContainer;
