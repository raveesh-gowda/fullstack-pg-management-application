import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import { startRemoveTenant } from "../../Redux/actions/tenantActions";
import TenantEditItem from "./TenantEditItem";

const TenantItem = (props) => {
   const { tenant } = props;

   const [toggle, setToggle] = useState(false);

   const dispatch = useDispatch();

   const rooms = useSelector((state) => state.rooms);
   const room = rooms.find((room) => room._id === tenant.roomId);

   const buildings = useSelector((state) => state.buildings);
   const building = buildings.find(
      (building) => building._id === tenant.buildingId
   );

   const handleShow = () => {
      swal(
         `
                Name : ${tenant.name}
                Email : ${tenant.email}
                Mobile: ${tenant.mobile}
                Aadhar : ${tenant.aadhar}
                Room : ${room.name}
                Building : ${building.name}
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
      <TenantEditItem handleToggle={handleToggle} tenant={tenant} />
   ) : (
      <>
         <h3>{tenant.name}</h3>
         <button onClick={handleToggle}>Edit</button>
         <button onClick={handleShow}>Show</button>
         <button
            onClick={() => {
               dispatch(startRemoveTenant(tenant._id));
            }}
         >
            Delete
         </button>
      </>
   );
};

export default TenantItem;
