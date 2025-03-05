import Armstrong from "./assets/ArmstrongPortrait.webp"

function App() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg transition-shadow hover:shadow-2xl p-6">
        <div className="flex items-center space-x-4">
          <img 
            className="w-20 h-20 rounded-full border-2 border-gray-300" 
            src={Armstrong} 
            alt="User Avatar" 
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">Алексей Иванов</h2>
            <p className="text-gray-500">Frontend Developer</p>
          </div>
        </div>
        <p className="mt-3 text-gray-600 text-sm">
          Разрабатываю современные и удобные интерфейсы на React и TailwindCSS.
        </p>
        <div className="mt-4 flex space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg transition hover:bg-blue-700">
            Add Friend
          </button>
          <button className="px-4 py-2 border border-green-500 text-green-500 rounded-lg transition hover:bg-green-500 hover:text-white">
            Sent Message
          </button>
        </div>
      </div>
    </div>
  )}

export default App
