import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64 bg-white min-h-screen p-4 shadow-md">
    <nav className="flex flex-col gap-2 mb-8">
      <Link to="/home" className="flex items-center gap-2 p-2 rounded hover:bg-blue-50 font-semibold">
        <span>🏠</span> Home
      </Link>
      <Link to="/home/profile" className="flex items-center gap-2 p-2 rounded hover:bg-blue-50">
        <span>👤</span> Profile
      </Link>
      <Link to="/friends" className="flex items-center gap-2 p-2 rounded hover:bg-blue-50">
        <span>👥</span> Friends
      </Link>
      <Link to="/messages" className="flex items-center gap-2 p-2 rounded hover:bg-blue-50">
        <span>💬</span> Messages
      </Link>
    </nav>
    <div>
      <h3 className="font-semibold mb-2">Online Friends</h3>
      <ul className="space-y-1">
      
        <li className="flex items-center gap-2">
          <span className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center font-bold">A</span>
          Alex Johnson <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
        </li>
        <li className="flex items-center gap-2">
          <span className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center font-bold">S</span>
          Sarah Wilson <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
        </li>
        <li className="flex items-center gap-2">
          <span className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center font-bold">M</span>
          Michael Brown <span className="w-2 h-2 bg-yellow-400 rounded-full ml-2"></span>
        </li>
      </ul>
    </div>
  </aside>
);

export default Sidebar;