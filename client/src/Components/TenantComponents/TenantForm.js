import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import validator from "validator";

const TenantForm = (props) => {
   const {
      formSubmit,
      handleToggle,
      mobile: Mobile,
      aadhar: Aadhar,
      buildingId: BuildingId,
      email: Email,
      name: Name,
      roomId: RoomId,
      _id: id,
   } = props;

   const buildings = useSelector((state) => state.buildings);
   const rooms = useSelector((state) => state.rooms);

   const [name, setName] = useState(Name ? Name : "");
   const [mobile, setMobile] = useState(Mobile ? Mobile : "");
   const [buildingId, setBuildingId] = useState(BuildingId ? BuildingId : "");
   const [roomId, setRoomId] = useState(RoomId ? RoomId : "");
   const [aadhar, setAadhar] = useState(Aadhar ? Aadhar : "");
   const [email, setEmail] = useState(Email ? Email : "");
   const [sortedRooms, setSortedRooms] = useState(rooms);
   const [formErrors, setFormErrors] = useState({});
   const errors = {};

   const reset = () => {
      setName("");
      setAadhar("");
      setEmail("");
      setMobile("");
      setBuildingId("");
      setRoomId("");
      setSortedRooms(rooms);
   };

   const runValidations = () => {
      if (name.trim().length === 0) {
         errors.name = "*Name cannot be blank";
      } else if (aadhar.trim().length === 0) {
         errors.aadhar = "*Aadhar is required";
      } else if (email.trim().length === 0) {
         errors.email = "*Email is required";
      } else if (!validator.isEmail(email)) {
         errors.email = "*Invalid email id";
      } else if (mobile.trim().length === 0) {
         errors.mobile = "*Mobile is required";
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      runValidations();
      if (Object.keys(errors).length === 0) {
         setFormErrors({});
         const formData = {
            name,
            email,
            mobile,
            aadhar,
            roomId,
            buildingId,
         };
         formSubmit(formData, reset, handleToggle, id);
      } else {
         setFormErrors(errors);
      }
   };

   const handleChange = (e) => {
      const attr = e.target.name;
      if (attr === "name") {
         setName(e.target.value);
      } else if (attr === "mobile") {
         setMobile(e.target.value);
      } else if (attr === "aadhar") {
         setAadhar(e.target.value);
      } else if (attr === "email") {
         setEmail(e.target.value);
      } else if (attr === "buildingId") {
         setBuildingId(e.target.value);
      } else if (attr === "roomId") {
         setRoomId(e.target.value);
      }
   };

   useEffect(() => {
      const temp = rooms.filter((ele) => ele.buildingId === buildingId);
      const res = temp.length > 0 ? temp : rooms;
      setSortedRooms(res);
   }, [buildingId, rooms]);

   useEffect(() => {
      const temp = rooms.find((ele) => ele._id === roomId);
      const res = temp ? temp.buildingId : "";
      setBuildingId(res);
   }, [roomId, rooms]);

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
            <label>Mobile</label>
            <br />
            <input
               type="text"
               placeholder="Mobile"
               name="mobile"
               value={mobile}
               onChange={handleChange}
            />
            {formErrors.mobile && <span>{formErrors.mobile}</span>}
            <br />
            <label>Aadhar</label>
            <br />
            <input
               type="text"
               placeholder="Aadhar"
               name="aadhar"
               value={aadhar}
               onChange={handleChange}
            />
            {formErrors.aadhar && <span>{formErrors.aadhar}</span>}
            <br />
            <label>Email</label>
            <br />
            <input
               type="text"
               placeholder="Email"
               name="email"
               value={email}
               onChange={handleChange}
            />
            {formErrors.email && <span>{formErrors.email}</span>}
            <br />
            <label>Building</label>
            <br />
            <select
               name="buildingId"
               value={buildingId}
               onChange={handleChange}
            >
               <option value="">--Select Building---</option>
               {buildings.map((building) => (
                  <option value={building._id} key={building._id}>
                     {building.name}
                  </option>
               ))}
            </select>
            <br />
            <label>Room</label>
            <br />
            <select name="roomId" value={roomId} onChange={handleChange}>
               <option value="">---Select Room---</option>
               {sortedRooms.map((room) => (
                  <option value={room._id} key={room._id}>
                     {room.name}
                  </option>
               ))}
            </select>
            <br />
            <input type="submit" value="Add" />
         </form>
      </>
   );
};

export default TenantForm;
