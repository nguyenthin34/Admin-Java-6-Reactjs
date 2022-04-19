import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  logout = () => {
    localStorage.removeItem("accessToken");
    alert("Logout Success");
  };

  loadDataProfile = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("accessToken")
    );
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("http://localhost:8080/api/test/user", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(response.status);
      })
      .then((result) => {
        console.log(result);
        this.setState({ user: result });
      })
      .catch((error) => {
        console.log("error", error);
        this.logout();
      });
  };

  componentDidMount() {
    this.loadDataProfile();
  }

  render() {
    return (
      <div>
        <div>Name: {this.state.user.fullname}</div>
        <button type="button" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}
