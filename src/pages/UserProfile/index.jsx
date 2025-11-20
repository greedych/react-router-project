import { useParams } from "react-router";

function UserProfile() {
  const { userId } = useParams();

  console.log(+userId);

  const users = [
    { id: 1, name: "Alex", bio: "Softwere engenier" },
    { id: 2, name: "Alice", bio: "Admin" },
    { id: 3, name: "Max", bio: "Manager" },
  ];

  return (
    <div>
      {users.map((user) => {
        return (
          +userId === user.id && (
            <div>
              <h1>{user.name}</h1>
              <h2>{user.bio}</h2>
            </div>
          )
        );
      })}
    </div>
  );
}

export default UserProfile;
