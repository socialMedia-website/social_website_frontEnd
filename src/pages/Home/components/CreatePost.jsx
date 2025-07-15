import { Image } from "lucide-react";

export default function CreatePost() {
  return (
   
    <div className="  mb-6 border shadow-sm bg-white rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-gray-600">
          ME
        </div>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none"
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <button className="flex items-center gap-2 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm">
          <Image className="w-4 h-4" /> Photo
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-1 text-sm">
          Post
        </button>
      </div>
    </div>
  );
}