import { useDispatch } from "react-redux";

import TenantForm from "./TenantForm";
import { startAddTenant } from "../../Redux/actions/tenantActions";

const TenantAddItem = (props) => {
    const dispatch = useDispatch();
    
   const formSubmit = (formData, reset) => {
      dispatch(startAddTenant(formData, reset));
    };
    
   return (
      <>
         <h2>Add Tenants</h2>
         <TenantForm formSubmit={formSubmit} />
      </>
   );
};

export default TenantAddItem;
