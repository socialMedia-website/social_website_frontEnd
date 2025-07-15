import React, { useState } from 'react';

const SettingsPage = () => {
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files) {
      setProfilePicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Settings</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Change Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter new password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Change Profile Picture:</label>
        <input type="file" onChange={handleProfilePictureChange} className="w-full" />
        {profilePicture && (
          <img
            src={profilePicture}
            alt="Preview"
            className="mt-4 w-24 h-24 rounded-full"
          />
        )}
      </div>
      <button
        onClick={handleSave}
        className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save
      </button>
    </div>
  );
};

export default SettingsPage;