import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/Navbar";
import { List } from "./componets/List";
import { SignIn } from "./componets/SignIn";
import { Login } from "./componets/Login";
import { Home } from "./componets/Home";
import { Post } from "./componets/Post";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="Home" element={<Home></Home>}></Route>
        <Route path="List" element={<List></List>}></Route>
        <Route path="Register" element={<SignIn></SignIn>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="Post" element={<Post></Post>}></Route>
      </Routes>
    </>
  );
}

export default App;
