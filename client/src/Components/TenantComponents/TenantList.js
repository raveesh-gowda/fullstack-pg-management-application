import { useState } from "react";
import { useSelector } from "react-redux";

import TenantItem from "./TenantItem";

const TenantList = (props) => {
   const [buildingId, setBuildingId] = useState("");

   const tenants = useSelector((state) => state.tenants);
   const buildings = useSelector((state) => state.buildings);

   const handleChange = (e) => {
      setBuildingId(e.target.value);
   };

   return (
      <>
         <h2>
            Listing Tenants -{" "}
            {
               tenants.filter((tenant) =>
                  tenant.buildingId.includes(buildingId)
               ).length
            }
         </h2>
         {tenants.length === 0 ? (
            <>
               <h3>No tenants are added</h3>
            </>
         ) : (
            <>
               <select value={buildingId} onChange={handleChange}>
                  <option value="">---Select Building---</option>
                  {buildings.map((building) => (
                     <option value={building._id} key={building._id}>
                        {building.name}
                     </option>
                  ))}
               </select>
               {tenants
                  .filter((tenant) => tenant.buildingId.includes(buildingId))
                  .map((tenant) => (
                     <TenantItem key={tenant._id} tenant={tenant} />
                  ))}
            </>
         )}
      </>
   );
};

export default TenantList;
