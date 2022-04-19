import Navb from "../../nav";
import { getAll, add } from "../../api/OrderApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export default function List_Commodity() {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    getAll().then((response) => setOrder(response.data));
  }, []);

  return (
    <div>
      <Navb />
      <div className="card">
        <div className="card-header">Order Lines</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order Id</th>
              <th scope="col">Creator</th>
              <th scope="col">Create Date</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Receiver</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.order_id}</td>
                <td>{order.user.fullname}</td>
                <td>{order.createDate}</td>
                <td>{order.totalAmount}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
