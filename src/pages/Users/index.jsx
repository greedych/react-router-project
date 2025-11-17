import { Link } from "react-router";

function Users() {
  const users = [
    { id: 1, name: "Alex", bio: "Softwere engenier" },
    { id: 2, name: "Alice", bio: "Admin" },
    { id: 3, name: "Max", bio: "Manager" },
  ];

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li>
              <Link to={`/userprofile/${user.id}`}>
                <h1>{user.name}</h1>
                <h2>{user.bio}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
