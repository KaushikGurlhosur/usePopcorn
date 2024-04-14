import { useState } from "react";

/* eslint-disable react/prop-types */
function NewUser({ register, onRegister }) {
  const [data, setData] = useState("");
  console.log(data);
  return (
    <>
      <div>
        <h2>New User Registration</h2>

        <form
          style={{
            display: "grid, 1fr",
            alignItems: "center",
            justifyContent: "center",
            padding: "1em",
          }}>
          <div style={{ padding: "5px", margin: "5px" }}>
            <span>First Name :</span>{" "}
            <input
              placeholder="Name"
              type="text"
              style={{ justifyItems: "flex-end" }}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div style={{ padding: "5px", margin: "5px" }}>
            <span>Last Name :</span>{" "}
            <input
              placeholder="Name"
              type="text"
              style={{ justifyItems: "flex-end" }}
            />
          </div>
          <div style={{ padding: "5px", margin: "5px" }}>
            <span>Username :</span>{" "}
            <input
              placeholder="Name"
              type="text"
              style={{ justifyItems: "flex-end" }}
            />
          </div>
          <div style={{ padding: "5px", margin: "5px" }}>
            <span>Password :</span>{" "}
            <input
              placeholder="Name"
              type="text"
              style={{ justifyItems: "flex-end" }}
            />
          </div>
          <div style={{ padding: "5px", margin: "5px" }}>
            <span>Date of Birth :</span>{" "}
            <input
              placeholder="Name"
              type="text"
              style={{ justifyItems: "flex-end" }}
            />
          </div>
        </form>
        <button onClick={() => onRegister(!register)}>Register</button>
      </div>
    </>
  );
}

export default NewUser;
