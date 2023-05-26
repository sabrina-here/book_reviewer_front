import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes";

function App() {
  const [books, setBooks] = useState([]);

  const getData = () => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results);
        console.log(data.results);
      });
  };

  const sendData = () => {
    const data = { array: books };
    fetch("http://localhost:5000/addBooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("books added successfully");
        }
      });
  };

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <button onClick={getData}>get data</button>
      <button onClick={sendData}>send data to database</button> */}
    </div>
  );
}

export default App;
