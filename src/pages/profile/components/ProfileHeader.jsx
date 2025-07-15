import React from 'react';

const ProfileHeader = () => {
  const handleSettingsClick = () => {
    // Navigate to settings page
    window.location.href = '/setting';
  };

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?rs=1&pid=ImgDetMain)" }}
      >
        {/* Background image */}
      </div>
      <div className="mt-[-75px] text-center">
        <div className="inline-block">
          <img
            src="https://th.bing.com/th/id/OIP.TV2Qx00U9v5GzvD0YYxCDQHaET?rs=1&pid=ImgDetMain"
            alt="User Profile"
            className="w-36 h-36 rounded-full border-4 border-white"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-500">@johndoe</p>
          <p className="text-gray-600">Full-stack developer | Photography enthusiast | Travel lover</p>
          <p className="text-gray-600">📍 New York, USA</p>
          <p className="text-blue-500">
            🌐 <a href="https://johndoe.com" target="_blank" rel="noopener noreferrer">johndoe.com</a>
          </p>
          <p className="text-gray-500">Joined January 2023</p>
        </div>
        <div className="mt-4">
          <button
            onClick={handleSettingsClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;