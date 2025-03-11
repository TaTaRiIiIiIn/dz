import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

const API_URL = "https://fakestoreapi.com/users";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
