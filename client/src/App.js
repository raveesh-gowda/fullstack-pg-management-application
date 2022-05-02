import { useState } from "react";

import NavBar from "./Components/NavBar";

const App = (props) => {
   const [userLoggedIn, setUserLoggedIn] = useState(false);

   const handleAuth = () => {
      setUserLoggedIn(!userLoggedIn);
   };

   return (
      <>
         <h1>Paying Guest Application</h1>
         <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
      </>
   );
};

export default App;
