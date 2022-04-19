import { getAll as getAllRole } from "./api/RoleApi";
import { getAll as getAllSize } from "./api/SizeApi";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import Signin from "./components/login/signin";
import useToken from "./useToken";

function App() {

  // const { token, setToken } = useToken();

  const [roles, setRole] = useState([]);
  useEffect(() => {
    getAllRole().then((response) => setRole(response.data));
  }, []);


   const [sizes, setSize] = useState([]);
   useEffect(() => {
     getAllSize().then((response) => setSize(response.data));
   }, []);

  //  if (!token) {
  //      return <Signin setToken={setToken} />;
  //    }
  return <Routes
    roles={roles}
    sizes={sizes} />;
}

export default App;

