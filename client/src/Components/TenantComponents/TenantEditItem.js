import { useDispatch } from "react-redux";

import TenantForm from "./TenantForm";
import { startEditTenant } from "../../Redux/actions/tenantActions";

const TenantEditItem = (props) => {
   const { handleToggle, tenant } = props;

   const dispatch = useDispatch();

   const formSubmit = (formData, reset, handleToggle, id) => {
      dispatch(startEditTenant(formData, reset, id));
      handleToggle();
   };

   return (
      <>
         <h2>Edit Tenant</h2>
         <TenantForm
            handleToggle={handleToggle}
            formSubmit={formSubmit}
            {...tenant}
         />
         <button onClick={handleToggle}>Cancel</button>
      </>
   );
};

export default TenantEditItem;
