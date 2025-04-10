import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { clearSelectedUser } from "../store/slices/usersSlice";
import { fetchUserById } from "../store/async/usersAsync";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedUser: user, loading, error } = useSelector((state) => state.users);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(fetchUserById(id));
    return () => dispatch(clearSelectedUser());
  }, [dispatch, id]);

  if (loading || !user) return <p className="p-10">Загрузка...</p>;
  if (error) return <p className="p-10 text-red-500">Ошибка: {error}</p>;

  return (
    <div className="p-10 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold capitalize">{user.name.firstname} {user.name.lastname}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Телефон:</strong> {user.phone}</p>
      <p className="capitalize"><strong>Адрес:</strong> {user.address.street}, {user.address.number}, {user.address.city}, {user.address.zipcode}</p>
      <p><strong>Геолокация:</strong> {user.address.geolocation.lat}, {user.address.geolocation.long}</p>
      <p><strong>Имя пользователя:</strong> {user.username}</p>
      <p>
        <strong>Пароль:</strong> {showPassword ? user.password : "******"}
        <button className="ml-2 text-blue-500" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Скрыть" : "Показать"}
        </button>
      </p>
      <button onClick={() => navigate("/users")} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
        Назад к списку пользователей
      </button>
    </div>
  );
}

export default UserDetail;
