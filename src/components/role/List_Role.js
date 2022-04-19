import Navb from "../../nav";
import {useDispatch, useSelector} from 'react-redux';
import {roleSelector} from '../../redux/selector'
import { getAll } from "../../api/RoleApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router";
import { add } from "../../api/RoleApi";
import { Link, NavLink } from "react-router-dom";
export default function List_Role() {
  // const roles = useSelector(getAll());
  const [roles, setRoles] = useState([]);
  //  let history = useHistory();
   const { register, handleSubmit } = useForm();
  useEffect(() => {
    getAll().then((response) => setRoles(response.data));
  }, []);
    const HandleAdd = (role) => {
      setRoles([...roles, role]);
    };


    const onHandleUpdate = (role) => {
      console.log("app", role);
      const newProject = roles.map((item) =>
        item.id === roles.id ? role : item
      );
      setRoles(newProject);
    };


    const onSubmit = async (role) => {
      try {
        const { data } = await add(role);
        HandleAdd(data);
        // history.push("/role");
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div>
      
      <Navb />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr>
              <th scope="row">{role.role_id}</th>
              <td>{role.name}</td>
              <td>
                <Link to={"/role/edit/" + role.role_id}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <div className="card-header">
              <h1>Add New Role</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="colorID">Role ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="roleID"
                  aria-describedby="colorIDHid"
                  placeholder="Size ID"
                  readOnly
                />
                <small id="colorIDHid" className="form-text text-muted">
                  Role ID is invalid
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="nameHid"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <small id="nameHid" className="form-text text-muted">
                  Name is invalid
                </small>
              </div>
              <div className="form-group mb-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    defaultValue="option1"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Active
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Inactive
                  </label>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">
                <i className="fa fa-save mr-2" aria-hidden="true" />
                Save
              </button>
              <button type="reset" className="btn btn-info">
                <i className="fa fa-rev mr-2" aria-hidden="true" />
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
