import Navb from "../../nav";
import { getAll, add } from "../../api/ColorApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export default function List_Color() {

  const [colors, setColors] = useState([]);
  
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    getAll().then((response) => setColors(response.data));
  }, []);
    const HandleAdd = (color) => {
      setColors([...colors, color]);
    };


    // const onHandleUpdate = (color) => {
    //   console.log("app", color);
    //   const newProject = colors.map((item) =>
    //     item.id === colors.id ? color : item
    //   );
    //   setColors(newProject);
    // };


    const onSubmit = async (color) => {
      try {
        const { data } = await add(color);
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
          {colors.map((color) => (
            <tr>
              <th scope="row">{color.color_id}</th>
              <td>{color.name}</td>
              <td>{color.status ? 'Active' : 'InActive'}</td>
              <td>
                <Link to={"/color/edit/" + color.color_id}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <div className="card-header">
              <h1>Add New Color</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="colorID">Color ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="colorID"
                  aria-describedby="colorIDHid"
                  placeholder="Color ID"
                  readOnly
                />
                <small id="colorIDHid" className="form-text text-muted">
                  Color ID is invalid
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
