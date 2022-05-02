import { useState } from "react";
import { useSelector } from "react-redux";

const BuildingForm = (props) => {
   const {
      formSubmit,
      _id: id,
      name: Name,
      landmark: LandMark,
      address: Address,
   } = props;

   const [name, setName] = useState(Name ? Name : "");
   const [landmark, setLandmark] = useState(LandMark ? LandMark : "");
   const [address, setAddress] = useState(Address ? Address : "");
   const [formErrors, setFormErrors] = useState({});
   const errors = {};

   const { user } = useSelector((state) => state.user);

   const handleChange = (e) => {
      const attr = e.target.name;
      if (attr === "name") {
         setName(e.target.value);
      } else if (attr === "landmark") {
         setLandmark(e.target.value);
      } else if (attr === "address") {
         setAddress(e.target.value);
      }
   };

   const runValidations = () => {
      if (name.trim().length === 0) {
         errors.name = "*Name cannot be blank";
      } else if (address.trim().length === 0) {
         errors.address = "*Address cannot be blank";
      } else if (landmark.trim().length === 0) {
         errors.landmark = "*Landmark cannot be blank";
      }
   };

   const reset = () => {
      setName("");
      setLandmark("");
      setAddress("");
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      runValidations();
      if (Object.keys(errors).length === 0) {
         setFormErrors({});
         const formData = {
            name,
            address,
            landmark,
            userId: user._id,
         };
         formSubmit(formData, id);
         reset();
      } else {
         setFormErrors(errors);
      }
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <label>Name</label>
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
            <label>Address</label>
            <br />
            <textarea
               type="text"
               placeholder="Address"
               name="address"
               value={address}
               onChange={handleChange}
            ></textarea>
            {formErrors.address && <span>{formErrors.address}</span>}
            <br />
            <label>Landmark</label>
            <br />
            <input
               type="text"
               placeholder="Landmark"
               name="landmark"
               value={landmark}
               onChange={handleChange}
            />
            {formErrors.address && <span>{formErrors.address}</span>}
            <br />
            <input type="submit" value="Add" />
         </form>
      </>
   );
};

export default BuildingForm;
