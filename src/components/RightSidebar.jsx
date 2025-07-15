import React from "react";

const friendRequests = [
  { name: "Emma Thompson", mutual: 3 },
  { name: "David Wilson", mutual: 5 },
];

const onlineFriends = [
  { name: "Alex Johnson", status: "online" },
  { name: "Sarah Wilson", status: "online" },
  { name: "Michael Brown", status: "away" },
];

export default function RightSidebar() {
  return (
    <aside className="w-80 bg-gray-50  mt-1 px-4 py-6 flex flex-col gap-8 h-[calc(100vh-4rem)] fixed right-0 top-16 overflow-y-auto">
      {/* Friend Requests */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-m">Friend Requests</h2>
          <a href="#" className="text-s text-blue-600">See all</a>
        </div>
        {friendRequests.map((req, i) => (
          <div key={i} className="bg-white rounded p-2 mb-2  items-center justify-between">
            <div>
               
              <div className="font-medium text-m">
                
                {req.name}</div>
              <div className="text-s text-gray-500">{req.mutual} mutual friends</div>
            </div>
            <div className="flex  items-center gap-2 mt-2">
              <button className="bg-blue-600 text-white text-s px-7 py-1 rounded">Accept</button>
              <button className="bg-gray-200 text-s px-7 py-1 rounded">Decline</button>
            </div>
          </div>
        ))}
      </section>
      {/* Online Friends */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-sm">Online Friends</h2>
          <a href="#" className="text-xs text-blue-600">See all</a>
        </div>
        <ul>
          {onlineFriends.map((friend, i) => (
            <li key={i} className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600 text-xs">
                {friend.name[0]}
              </span>
              <span className="text-sm">{friend.name}</span>
              <span className={`ml-auto w-2 h-2 rounded-full ${friend.status === "online" ? "bg-green-500" : "bg-yellow-400"}`}></span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}