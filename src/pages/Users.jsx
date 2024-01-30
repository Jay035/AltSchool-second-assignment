import ReactPaginate from "react-paginate";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import UserDetails from "../components/UserDetails";

export default function Users({
  displayUsers,
  changePage,
  pageCount,
  loading,
}) {

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
