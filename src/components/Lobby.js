import React, { useState } from "react";

const Lobby = ({ joinroom }) => {
  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="max-w-md w-full mx-auto bg-white p-6 rounded shadow-md space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          joinroom(user, room);
        }}
      >
        <div className="bg-blue-3
        00 p-4 rounded flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Room"
            onChange={(e) => setRoom(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={!user || !room}
          className={`w-full py-2 px-4 rounded text-white transition ${!user || !room
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-400 hover:bg-blue-700'
            }`}
        >
          Join
        </button>
      </form>
    </div>

  );
};

export default Lobby;
