import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
    <h1 className="text-5xl font-bold text-center mb-4">Connect & Share</h1>
    <p className="text-xl text-center mb-10">
      Join our social platform to connect with friends, share your moments, and stay in touch with the people who matter.
    </p>
    <div className="flex gap-8 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center">
        <span className="text-3xl">📝</span>
        <h2 className="font-bold text-xl mb-2">Share Updates</h2>
        <p>Post updates, photos and moments that matter to you</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center">
        <span className="text-3xl">💬</span>
        <h2 className="font-bold text-xl mb-2">Real-time Chat</h2>
        <p>Chat with friends and stay connected wherever you are</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center">
        <span className="text-3xl">👥</span>
        <h2 className="font-bold text-xl mb-2">Build Connections</h2>
        <p>Find new friends and build your social circle</p>
      </div>
    </div>
    <div className="flex gap-4">
      <Link to="/login">
        <button className="bg-black text-white px-6 py-2 rounded">Login</button>
      </Link>
      <Link to="/register">
        <button className="bg-white border border-black px-6 py-2 rounded">Register</button>
      </Link>
    </div>
  </div>
);

export default LandingPage;