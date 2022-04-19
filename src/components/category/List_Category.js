import Navb from "../../nav";
import { getAll, add } from "../../api/CategoryApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export default function List_Category() {

  const [categories, setCategories] = useState([]);
  
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    getAll().then((response) => setCategories(response.data));
  }, []);
    const HandleAdd = (category) => {
      setCategories([...categories, category]);
    };


    // const onHandleUpdate = (category) => {
    //   console.log("app", category);
    //   const newProject = categories.map((item) =>
    //     item.id === categories.id ? category : item
    //   );
    //   setCategories(newProject);
    // };


    const onSubmit = async (category) => {
      try {
        const { data } = await add(category);
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
          {categories.map((category) => (
            <tr>
              <th scope="row">{category.category_id}</th>
              <td>{category.name}</td>
              <td>{category.status ? 'Active' : 'InActive'}</td>
              <td>
                <Link to={"/category/edit/" + category.category_id}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <div className="card-header">
              <h1>Add New Category</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="categoryID">Category ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="categoryID"
                  aria-describedby="categoryIDHid"
                  placeholder="Category ID"
                  readOnly
                />
                <small id="categoryIDHid" className="form-text text-muted">
                  Category ID is invalid
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
