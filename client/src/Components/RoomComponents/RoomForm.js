import React, { useState } from "react";
import { useSelector } from "react-redux";

const RoomForm = (props) => {
   const {
      formSubmit,
      _id: id,
      name: Name,
      buildingId: BuildingId,
      handleToggle,
   } = props;

   const buildings = useSelector((state) => state.buildings);

   const [name, setName] = useState(Name ? Name : "");
   const [buildingId, setBuildingId] = useState(BuildingId ? BuildingId : "");
   const [formErrors, setFormErrors] = useState({});
   const errors = {};

   const reset = () => {
      setBuildingId("");
      setName("");
   };

   const runValidations = () => {
      if (name.trim().length === 0) {
         errors.name = "*Name cannot be blank";
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      runValidations();
      if (Object.keys(errors).length === 0) {
         setFormErrors({});
         const formData = {
            name,
            buildingId,
         };
         formSubmit(formData, handleToggle, id);
         reset();
      } else {
         setFormErrors(errors);
      }
   };

   const handleChange = (e) => {
      const attr = e.target.name;
      if (attr === "name") {
         setName(e.target.value);
      } else if (attr === "buildingId") {
         setBuildingId(e.target.value);
      }
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <label>Room Name</label>
            <br />
            <input
               type="text"
               placeholder="Name"
               name="name"
               value={name}
               onChange={handleChange}
            />
            {formErrors.name && <span>{formErrors.name}</span>}
            <br />
            <label>Building</label>
            <br />
            <select
               name="buildingId"
               value={buildingId}
               onChange={handleChange}
            >
               <option value="">---Select Building---</option>
               {buildings.map((build) => (
                  <option value={build._id} key={build._id}>
                     {build.name}
                  </option>
               ))}
            </select>
            <br />
            <input type="submit" value="Add" />
         </form>
      </>
   );
};

export default RoomForm;
