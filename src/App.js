import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import FullUserDetails from "./components/FullUserDetails";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState("");
  // loading state
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = userData && Math.ceil(userData.length / usersPerPage);
  const changePage = ({ selected }) => {
    setLoading(true);
    setPageNumber(selected);
    setLoading(false);
  };

  const displayUsers =
    !loading &&
    userData
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((user, index) => {
        return (
          <div key={index} className="card">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
            />
            <div className="user-details">
              <div className="name">
                <p className="value">
                  {user.name.title} {user.name.first} {user.name.last}
                </p>
                <Link to={`/users/${user.email}`}>View More</Link>
              </div>
            </div>
          </div>
        );
      });

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.results);
        console.log(data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/users"
            element={
              <Users
                userData={userData}
                loading={loading}
                displayUsers={displayUsers}
                pageCount={pageCount}
                changePage={changePage}
              />
            }
          />
          <Route
            path="/users/:email"
            element={<FullUserDetails userData={userData} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
