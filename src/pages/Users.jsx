import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import UserDetails from "../components/UserDetails";

export default function Users({
  displayUsers,
  changePage,
  pageCount,
  loading,
}) {
  // const [userData, setUserData] = useState("");
  // // loading state
  // const [loading, setLoading] = useState(true);
  // const [pageNumber, setPageNumber] = useState(0);

  // const usersPerPage = 10;
  // const pagesVisited = pageNumber * usersPerPage;
  // const pageCount = userData && Math.ceil(userData.length / usersPerPage);
  // const changePage = ({ selected }) => {
  //   setLoading(true);
  //   setPageNumber(selected);
  //   setLoading(false);
  // };

  // const displayUsers =  !loading &&
  //   userData.slice(pagesVisited, pagesVisited + usersPerPage).map((user, index) => {
  //     const dob = new Date(user.dob.date).toLocaleDateString();

  //     return (
  //       <div key={index} className="card">
  //         <img src={user.picture.large} alt="user img" />
  //         <div className="user-details">
  //           <div className="name">
  //             {/* <p className="title">Name:</p> */}
  //             <p className="value">
  //               {user.name.title} {user.name.first} {user.name.last}
  //             </p>
  //             <Link to="/users/:id">See More</Link>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });

  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=50")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data.results);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err.message));
  // }, []);

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <UserDetails displayUsers={displayUsers} />

          <ReactPaginate
            breakLabel="..."
            pageRangeDisplayed={1}
            renderOnZeroPageCount={null}
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
