import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center p-20">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Страница не найдена</p>
      <Link to="/users" className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;
