import Navb from "../../nav";
import { getAll, add } from "../../api/SizeApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export default function List_Size() {

  const [sizes, setSizes] = useState([]);
  
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    getAll().then((response) => setSizes(response.data));
  }, []);
    const HandleAdd = (size) => {
      setSizes([...sizes, size]);
    };


    // const onHandleUpdate = (size) => {
    //   console.log("app", size);
    //   const newProject = sizes.map((item) =>
    //     item.id === sizes.id ? size : item
    //   );
    //   setSizes(newProject);
    // };


    const onSubmit = async (size) => {
      try {
        const { data } = await add(size);
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
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((size) => (
            <tr>
              <th scope="row">{size.size_id}</th>
              <td>{size.name}</td>
              <td>{size.status ? 'Active' : 'InActive'}</td>
              <td>
                <Link to={"/size/edit/" + size.size_id}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <div className="card-header">
              <h1>Add New Size</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="colorID">Size ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="sizeID"
                  aria-describedby="colorIDHid"
                  placeholder="Size ID"
                  readOnly
                />
                <small id="colorIDHid" className="form-text text-muted">
                  Size ID is invalid
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
                    defaultValue="true"
                    {...register("status")}
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
                    defaultValue="false"
                    {...register("status")}
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
