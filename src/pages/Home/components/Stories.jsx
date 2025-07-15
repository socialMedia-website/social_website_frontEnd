import { Plus } from "lucide-react";
import { useGetFriendsStoriesQuery, useCreateStoryMutation } from "../../../services/storyApi";
import { useRef, useState } from "react";

export default function Stories() {
  const { data, isLoading } = useGetFriendsStoriesQuery();
  const [createStory] = useCreateStoryMutation();
  const [showCreate, setShowCreate] = useState(false);
  const [content, setContent] = useState("");
  const fileInput = useRef();

  // Carousel state
  const [startIdx, setStartIdx] = useState(0);
  const stories = data?.stories || [];

  const visibleStories = stories.slice(startIdx, startIdx + 5);

  const handleNext = () => {
    if (startIdx + 5 < stories.length) setStartIdx(startIdx + 1);
  };
  const handlePrev = () => {
    if (startIdx > 0) setStartIdx(startIdx - 1);
  };

  const handleCreateStory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    if (fileInput.current.files[0]) {
      formData.append("image", fileInput.current.files[0]);
    }
    
    await createStory(formData);
    setShowCreate(false);
    setContent("");
    if (fileInput.current) fileInput.current.value = "";
  };

  return (
    <div className="flex items-center gap-2">
      {/* Prev Arrow */}
      {startIdx > 0 && (
        <button onClick={handlePrev} className="h-40 flex items-center px-2">
          <span className="text-2xl">&#8592;</span>
        </button>
      )}

      {/* Create Story */}
      <div className="flex flex-col items-center">
        <div
          className="w-28 h-40 bg-gray-100 rounded-lg flex flex-col items-center justify-center relative cursor-pointer"
          onClick={() => setShowCreate(true)}
        >
          <button className="bg-blue-500 text-white rounded-full p-2 absolute top-2 left-2">
            <Plus size={18} />
          </button>
          <span className="mt-24 text-xs font-medium">Create Story</span>
        </div>
      </div>

      {/* Stories Carousel */}
      <div className="flex gap-3 overflow-x-auto">
        {isLoading && <div>Loading...</div>}
        {visibleStories.map((story, idx) => (
          <div key={story._id || idx} className="flex flex-col items-center">
            <div
              className="w-28 h-40 rounded-lg bg-cover bg-center border-2 border-blue-400 flex items-end justify-center"
              style={{ backgroundImage: `url(${story.image || "https://via.placeholder.com/150"})` }}
            >
              <span className="bg-white rounded-full px-2 py-1 text-xs font-bold mb-2">
                {story.user?.name?.[0] || "U"}
              </span>
            </div>
            <span className="text-xs mt-1">{story.user?.name || "User"}</span>
          </div>
        ))}
      </div>

      {/* Next Arrow */}
      {startIdx + 5 < stories.length && (
        <button onClick={handleNext} className="h-40 flex items-center px-2">
          <span className="text-2xl">&#8594;</span>
        </button>
      )}

      {/* Create Story Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <form
            onSubmit={handleCreateStory}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 w-80"
          >
            <h2 className="text-lg font-bold mb-2">Create Story</h2>
            <textarea
              className="border rounded p-2"
              placeholder="What's your story?"
              value={content}
              onChange={e => setContent(e.target.value)}
              rows={3}
            />
            <input type="file" ref={fileInput} accept="image/*" />
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                className="px-4 py-1 rounded bg-gray-200"
                onClick={() => setShowCreate(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1 rounded bg-blue-500 text-white"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}