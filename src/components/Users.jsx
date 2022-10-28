import Axios from "axios";
import { useState } from "react";
import buikem from "../buikem.jpg";

export default function Users() {
  const [data, setData] = useState("");
//   Axios.get("https://randomuser.me/api/?results=5000")
//     .then((res) => {
//       console.log(res.data);
//       setData(res.data.gender);
//     })
//     .catch((err) => console.log(err.message));

  fetch("https://randomuser.me/api/")
    .then((res) =>  res.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err.message));

  return (
    <div className="container users-page">
      Users
      <div className="card">
        <img className='user-img' src={buikem} alt="pics" />
        <div className="user-details">
          <div className="name">
            <p className="title">Name:</p>
            <p className="value">Joe Samson</p>
          </div>
          <div className="username">
            <p className="title">Username:</p>
            <p className="value">JoeSams897</p>
          </div>
          <div className="email">
            <p className="title">Email:</p>
            <p className="value">Joesamson90@gmail.com</p>
          </div>
          <div className="Phone">
            <p className="title">Phone:</p>
            <p className="value">(234)-808-977-6656</p>
          </div>
        </div>
      </div>
    </div>
  );
}
