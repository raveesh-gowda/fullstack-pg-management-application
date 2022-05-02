import { useState, useEffect } from "react";
import validator from "validator";
import { useDispatch } from "react-redux";

import { startRegisterUser } from "../../Redux/actions/userActions";

const Register = (props) => {
   const [registered, setRegistered] = useState(false);
   const [username, setUserName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [formErrors, setFormErrors] = useState({});
   const errors = {};

   useEffect(() => {
      if (registered) {
         props.history.push("/login");
      }
   }, [props.history, registered]);

   const handleChange = (e) => {
      const attr = e.target.name;
      if (attr === "name") {
         setUserName(e.target.value);
      } else if (attr === "email") {
         setEmail(e.target.value);
      } else if (attr === "password") {
         setPassword(e.target.value);
      }
   };

   const runValidations = () => {
      if (username.trim().length === 0) {
         errors.username = "*name cannot be blank";
      } else if (email.trim().length === 0) {
         errors.email = "*Email cannot be blank";
      } else if (!validator.isEmail(email)) {
         errors.email = "*Invalid email format";
      } else if (password.trim().length < 6) {
         errors.password = "*Password length is too short";
      }
   };

   const handleReset = () => {
      setUserName("");
      setEmail("");
      setPassword("");
   };

   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();

      runValidations();
      if (Object.keys(errors).length === 0) {
         setFormErrors({});
         const formData = {
            username,
            email,
            password,
         };
        //  console.log(formData);
         dispatch(startRegisterUser(formData));
         handleReset();
         setRegistered(true);
      } else {
         setFormErrors(errors);
      }
   };

   return (
      <>
         <h3>Register With Us!!</h3>
         <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <br />
            <input
               type="text"
               name="name"
               value={username}
               onChange={handleChange}
               placeholder="abcdef"
            />
            {formErrors.username && <span>{formErrors.username}</span>}
            <br />
            <label>Email ID</label>
            <br />
            <input
               type="text"
               name="email"
               value={email}
               onChange={handleChange}
               placeholder="abcdef@gmail.com"
            />
            {formErrors.email && <span>{formErrors.email}</span>}
            <br />
            <label>Password</label>
            <br />
            <input
               type="password"
               name="password"
               value={password}
               onChange={handleChange}
               placeholder="**********"
            />
            {formErrors.password && <span>{formErrors.password}</span>}
            <br />
            <input type="submit" value="Register" />
         </form>
      </>
   );
};

export default Register;
