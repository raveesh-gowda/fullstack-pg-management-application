import { useSelector } from "react-redux";

import BuildingItem from "./BuildingItem";

const BuildingList = (props) => {
   const { buildings } = useSelector((state) => state);

   return (
      <>
         <h2>Listing Buildings - {buildings.length}</h2>
         {buildings.length === 0 ? (
            <>
               <h4>No buildings are added</h4>
            </>
         ) : (
            <>
               {buildings.map((building) => (
                  <BuildingItem key={building._id} building={building} />
               ))}
            </>
         )}
      </>
   );
};

export default BuildingList;
