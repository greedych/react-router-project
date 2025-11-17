import { Link } from "react-router";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default Nav;
