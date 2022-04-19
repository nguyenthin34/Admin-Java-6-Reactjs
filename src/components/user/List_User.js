

import Navb from "../../nav";
import { getAll, add } from "../../api/UserApi";
import { get } from "../../api/RoleApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function List_User(props) {
  const [users, setUsers] = useState([]);
  

  const { register, handleSubmit } = useForm();
  
  useEffect(() => {
    getAll().then((response) => setUsers(response.data));
  }, []);
  const HandleAdd = (user) => {
    setUsers([...users, user]);
  };

  const onHandleUpdate = (user) => {
    const newProject = users.map((item) =>
      item.username === users.id ? user : item
    );
    setUsers(newProject);
  };
    //  
    const rolee = {
      role_id: null,
      name: ''

    }
    const findRole = (id) => {
      console.log(typeof id)
       for(let i = 0; i < props.roles.length; i++) {
            
            if(props.roles[i].role_id == id){
              console.log("hihi", props.roles[i].role_id)
              // setRole(props.roles[i])
              rolee.role_id = props.roles[i].role_id;
              rolee.name = props.roles[i].name;
            }
        }
    }
  
  const onSubmit = async (user) => {
    try {
    findRole(Number(user.role));
    console.log("role", rolee);
    user.role = rolee;
    const { data } = await add(user);
    HandleAdd(data);  
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
            <th scope="col">Username</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Role</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <th scope="row">{user.username}</th>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.status ? "true" : "false"}</td>
              <td>{user.role.name}</td>
              <td>
                <Link to={"/user/edit/" + user.username}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <div className="card-header">
              <h1>Add New User</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="colorID">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="roleID"
                  aria-describedby="colorIDHid"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
                <small id="colorIDHid" className="form-text text-muted">
                  Username is invalid
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="nameHid"
                  placeholder="Name"
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
                    defaultChecked
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
                <option selected>Open this select menu</option>
                {props.roles.map((item) => (
                  <option value={item.role_id}>{item.name}</option>
                ))}
              </select>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-primary"
                style={{ marginRight: "1rem" }}
              >
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
