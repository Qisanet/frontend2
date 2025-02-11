import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiSquarePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import BookTable from "../components/Home/BookTable";

function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const usernameLocal = localStorage.getItem("user");
  console.log(usernameLocal);
  if (usernameLocal == null) {
    navigate("/");
  }
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("https://as1backend.onrender.com/books", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setBooks(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container p-4">
      <div className="flex justify-between items-center">
        <h1 className="display-4 mt-5">Books List</h1>
        <Link to="/books/create">
          <CiSquarePlus className="display-5" />
        </Link>
        <span className="mx-2">Welcome,{usernameLocal}!</span>
        <button className="btn btn-primary my-3 my-3" onClick={handleLogOut}>
          Log out
        </button>
      </div>
      <BookTable books={books} />
    </div>
  );
}

export default Home;