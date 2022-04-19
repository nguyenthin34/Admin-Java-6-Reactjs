// import { useForm } from "react-hook-form";
// import { useHistory } from "react-router";
// import { add } from "../../api/RoleApi";
// export default function Add_Role() {
//      let history = useHistory();
//      const { register, handleSubmit } = useForm();
//      const onSubmit = async (role) => {
//        try {
//          const { data } = await add(role);
//          props.onAdd(data);
//          history.push("/role");
//        } catch (error) {
//          console.log(error);
//        }
//      };
//   return (
//     <div>
//       <form action method="post">
//         <div className="card">
//           <div className="card-header">
//             <h1>Add New Role</h1>
//           </div>
//           <div className="card-body">
//             <div className="form-group">
//               <label htmlFor="colorID">Role ID:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="roleID"
//                 aria-describedby="colorIDHid"
//                 placeholder="Size ID"
//                 readOnly
//               />
//               <small id="colorIDHid" className="form-text text-muted">
//                 Role ID is invalid
//               </small>
//             </div>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 aria-describedby="nameHid"
//                 placeholder="Name"
//               />
//               <small id="nameHid" className="form-text text-muted">
//                 Name is invalid
//               </small>
//             </div>
//             <div className="form-group mb-2">
//               <div className="form-check form-check-inline">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="inlineRadioOptions"
//                   id="inlineRadio1"
//                   defaultValue="option1"
//                   defaultChecked
//                 />
//                 <label className="form-check-label" htmlFor="inlineRadio1">
//                   Active
//                 </label>
//               </div>
//               <div className="form-check form-check-inline">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="inlineRadioOptions"
//                   id="inlineRadio2"
//                   defaultValue="option2"
//                 />
//                 <label className="form-check-label" htmlFor="inlineRadio2">
//                   Inactive
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="card-footer">
//             <button type="button" className="btn btn-primary">
//               <i className="fa fa-save mr-2" aria-hidden="true" />
//               Save
//             </button>
//             <button type="reset" className="btn btn-info">
//               <i className="fa fa-rev mr-2" aria-hidden="true" />
//               Reset
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
