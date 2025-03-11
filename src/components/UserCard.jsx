import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="flex justify-center items-center h-60">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg transition-shadow hover:shadow-2xl p-6">
        <div className="flex items-center space-x-4">
          <img 
            className="w-20 h-20 rounded-full border-2 border-gray-300" 
            src={`https://i.pravatar.cc/150?img=${user.id}`} 
            alt="User Avatar" 
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900 text-transform: capitalize">{user.name.firstname} {user.name.lastname}</h2>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500 text-transform: capitalize">{user.address.city}, {user.address.street}</p>
          </div>
        </div>
        <div className="mt-4">
          <Link to={`/users/${user.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg transition hover:bg-blue-700">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
