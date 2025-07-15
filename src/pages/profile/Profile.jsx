import ProfileHeader from "./components/ProfileHeader"
const profile = () => {
  return (
   
    <div className="max-w-2xl mx-auto px-4 py-8">
      <ProfileHeader />
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>
        {/* Placeholder for posts */}
        <div className="bg-white shadow rounded-lg p-4 mb-4">
          <p>No posts yet.</p>
        </div>
      </div>    
      
    </div>
  );    
}
export default profile;