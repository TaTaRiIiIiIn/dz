import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/async/usersAsync";

import UserCard from "../components/UserCard";

function UsersList() {
  const dispatch = useDispatch();
  const { usersList, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p className="p-10">Загрузка...</p>;
  if (error) return <p className="p-10 text-red-500">Ошибка: {error}</p>;

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {usersList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
