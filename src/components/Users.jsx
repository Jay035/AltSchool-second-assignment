import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Users() {
  const [userData, setUserData] = useState("");
  //   loading state
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisiited = pageNumber * usersPerPage;
  const pageCount = userData && Math.ceil(userData.length / usersPerPage);
  const changePage = ({ selected }) => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
    setLoading(false);
    setPageNumber(selected);
  };

  const displayUsers =
    userData &&
    userData.slice(pagesVisiited, pagesVisiited + usersPerPage).map((user) => {
      const dob = new Date(user.dob.date).toLocaleDateString();
      return (
        <div key={user.email} className="card">
          <img src={user.picture.large} alt="user img" />
          <div className="user-details">
            <div className="name">
              <p className="title">Name:</p>
              <p className="value">
                {user.name.title} {user.name.first} {user.name.last}
              </p>
            </div>
            <div className="email">
              <p className="title">Email:</p>
              <p className="value">{user.email}</p>
            </div>
            {/* <div className="phone">
              <p className="title">Phone:</p>
              <p className="value">{user.phone}</p>
            </div>
            <div className="age">
              <p className="title">Age:</p>
              <p className="value">{user.dob.age}</p>
            </div>
            <div className="dob">
              <p className="title">DOB:</p>
              <p className="value">{dob}</p>
            </div>
            <div className="gender">
              <p className="title">Gender:</p>
              <p className="value">{user.gender}</p>
            </div>
            <div className="location">
              <p className="title">Location:</p>
              <p className="value">
                {user.location.city}, {user.location.state},
                {user.location.country}
              </p>
            </div> */}
          </div>
        </div>
      );
    });

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=70")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="container">
      {loading && <div className="">Loading....</div>}
      {!loading && (
        <>
          <div className="users-page">{displayUsers}</div>

          <ReactPaginate
            breakLabel="..."
            pageRangeDisplayed={3}
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </>
      )}
    </div>
  );
}
