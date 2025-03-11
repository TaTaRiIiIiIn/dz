import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">HW</h1>
      <nav>
        <Link to="/users" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200">Список пользователей</Link>
      </nav>
    </header>
  );
}

export default Header;
