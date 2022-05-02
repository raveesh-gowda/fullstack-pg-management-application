import { useState } from "react";
import { useDispatch } from "react-redux";
import { startLoginUser } from "../../Redux/actions/userActions";

const Login = (props) => {
   const { handleAuth } = props;
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleChange = (e) => {
      const attr = e.target.name;
      if (attr === "email") {
         setEmail(e.target.value);
      } else if (attr === "password") {
         setPassword(e.target.value);
      }
   };

   const handleReset = () => {
      setEmail("");
      setPassword("");
   };

   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
         email,
         password,
      };
      dispatch(startLoginUser(formData, handleReset, handleAuth, props));
   };

   return (
      <>
         <h3>Login!!</h3>
         <form onSubmit={handleSubmit}>
            <label>Email ID</label>
            <br />
            <input
               type="text"
               name="email"
               value={email}
               onChange={handleChange}
               placeholder="abcdef@gmail.com"
            />
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
            <br />
            <input type="submit" value="Login" />
         </form>
      </>
   );
};

export default Login;
