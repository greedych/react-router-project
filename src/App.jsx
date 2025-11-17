import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Nav from "./components/nav";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userprofile/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
