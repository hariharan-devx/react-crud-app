import React, { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";

const App = () => {
  const [users, setUsers] = useState([]);
  const [buttonState, setButtonState] = useState("add");
  const [userInfo, setUserInfo] = useState({
    id: uuid(),
    name: "",
    age: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };
  const addData = () => {
    const { name, age, email, phone } = userInfo;
    if (!name || !age || !email || !phone) {
      alert("All fields are required!");
      return;
    }
    setUsers((currUsers) => [...currUsers, userInfo]);
    setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
    });
  };
  const deleteData = (id) => {
    setUsers((currUsers) => {
      return currUsers.filter((user) => {
        return user.id !== id;
      });
    });
  };
  const startEditing = (user) => {
    setUserInfo(user);
    setButtonState("edit");
  };

  const cancelEditing = () => {
    setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
    });
    setButtonState("add");
  };

  const updateData = () => {
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if (user.id === userInfo.id) {
          return userInfo;
        }
        return user;
      });
    });
    cancelEditing();
  };

  return (
    <div className="container">
      <h1>React JS CRUD</h1>
      <div className="form">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter Name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          id=""
          placeholder="Enter Age"
          value={userInfo.age}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter Email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="phone"
          id=""
          placeholder="Enter Phone"
          value={userInfo.phone}
          onChange={handleChange}
        />
        <br />
        {/* <button onClick={addData}>Add</button> */}
        {buttonState === "add" ? (
          <button onClick={addData}>Add</button>
        ) : (
          <div className="buttonContainer">
            <button onClick={updateData}>Update</button>
            <button onClick={cancelEditing}>Reset</button>
          </div>
        )}
      </div>
      <div className="dataTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Eamil</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={() => startEditing(user)}>Edit</button>
                    <button onClick={() => deleteData(user.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
