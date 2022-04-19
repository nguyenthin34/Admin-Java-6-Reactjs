import Navb from "../../nav";
import { getAll } from "../../api/SizeApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { get, update } from "../../api/SizeApi";
import { Link, NavLink, useParams } from "react-router-dom";

export default function Update_Size() {


   
     const { id } = useParams();
     const { register, handleSubmit, reset } = useForm();
     const [sizes, setSize] = useState({});
     useEffect(() => {
       get(id).then((response) => {
         setSize(response.data);
         reset(response.data);
       });
     }, [reset]);
     const onSubmit = (data) => {
       const size = {
         size_id: id,
         ...data,
       };
       update(size);
     };
  return (
    <div>
      <Navb />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <div className="card-header">
            <h1>Update New Size</h1>
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
                defaultValue={id}
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
                defaultValue={sizes.name}
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
                  defaultChecked={sizes.status}
                  {...register("status")}
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
                  defaultChecked={!sizes.status}
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
  );
}
