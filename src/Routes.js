import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./home";
import ListRole from "./components/role/List_Role"
import UpdateRole from "./components/role/Update_Role";

import ListUser from "./components/user/List_User";
import UpdateUser from "./components/user/Update_User";

import ListSize from "./components/size/List_Size";
import UpdateSize from "./components/size/Update_Size";

import ListColor from "./components/color/List_Color";
import UpdateColor from "./components/color/Update_Color";

import UpdateCategory from "./components/category/Update_Category";
import ListCategory from "./components/category/List_Category";
import ListOrder from "./components/order/ListOrder";

import Signin from "./components/login/signin";
export default function Routers(props){
    return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} exact></Route>
          <Route path="/role" element={<ListRole />} exact></Route>
          <Route path="/role/edit/:id" element={<UpdateRole />}></Route>

          <Route
            path="/user"
            element={<ListUser roles={props.roles} />}
            exact
          ></Route>
          <Route
            path="/user/edit/:username"
            element={<UpdateUser roles={props.roles} />}
            exact
          ></Route>

          <Route path="/size" element={<ListSize />} exact></Route>
          <Route path="/size/edit/:id" element={<UpdateSize />} exact></Route>

          <Route path="/color" element={<ListColor />} exact></Route>
          <Route path="/color/edit/:id" element={<UpdateColor />} exact></Route>

          <Route path="/category" element={<ListCategory />} exact></Route>
          <Route path="/category/edit/:id" element={<UpdateCategory />} exact></Route>

          <Route path="/order" element={<ListOrder />} exact></Route>

          <Route path="/signin" element={<Signin />} exact></Route>
        </Routes>
      </Router>
    );
}