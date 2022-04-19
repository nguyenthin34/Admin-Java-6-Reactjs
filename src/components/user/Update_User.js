import Navb from "../../nav";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router";
import { get, update } from "../../api/UserApi";
import { Link, NavLink, useParams } from "react-router-dom";

export default function Update_Role(props) {
  const { username } = useParams();



  const { register, handleSubmit, reset } = useForm();
    const rolee = {
      role_id: null,
      name: "",
    };
    const findRole = (id) => {
      console.log(typeof id);
      for (let i = 0; i < props.roles.length; i++) {
        if (props.roles[i].role_id == id) {
          rolee.role_id = props.roles[i].role_id;
          rolee.name = props.roles[i].name;
        }
      }
    };
  const [users, setUser] = useState({});
  useEffect(() => {
    get(username).then((response) => {
      setUser(response.data);
      reset(response.data);
    });
  }, [reset]);
  const onSubmit = (data) => {
    console.log(data.role);
    if(data.role.role_id == users.role.role_id) {
      console.log("")
     
    }else{
       findRole(data.role);
       data.role = rolee;
    }
  
    const user = {
      username,
      ...data,
    };
    update(user);
    console.log(user)
  };
  return (
    <div>
      <Navb />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <div className="card-header">
            <h1>Udpate User</h1>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="colorID">Username:</label>
              <input
                type="text"
                className="form-control"
                id="roleID"
                aria-describedby="colorIDHid"
                placeholder="Size ID"
                readOnly
                defaultValue={username}
              />
              <small id="colorIDHid" className="form-text text-muted">
                  ID is invalid
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
                defaultValue={users.fullname}
                {...register("fullname", { required: true })}
              />
              <small id="nameHid" className="form-text text-muted">
                Name is invalid
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="name">Email:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHid"
                placeholder="Email"
                defaultValue={users.email}
                {...register("email", { required: true })}
              />
              <small id="nameHid" className="form-text text-muted">
                Email is invalid
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="name">Password:</label>
              <input
                type="password"
                className="form-control"
                id="name"
                aria-describedby="nameHid"
                placeholder="Password"
                defaultValue={users.password}
                readOnly
                {...register("password", { required: true })}
              />
              <small id="nameHid" className="form-text text-muted">
                Password is invalid
              </small>
            </div>
            <div className="form-group mb-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  defaultValue="true"
                  defaultChecked={users.status}
                  {...register("status", { required: true })}
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
                  defaultValue="false"
                  defaultChecked={!users.status}
                  {...register("status", { required: true })}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Inactive
                </label>
              </div>
            </div>
            <select
              className="form-select"
              aria-label="Default select example"
              {...register("role")}
              
            >
              {props.roles.map((role) => (
                <option 
                selected={role.role_id === users.role.role_id}
                value={role.role_id} key={role.role_id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" style={{ marginRight: "1rem" }}>
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
  );
}
