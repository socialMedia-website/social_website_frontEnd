import CreatePost from "./components/CreatePost";
import Stories from "./components/Stories";
import RightSidebar from "../../components/RightSidebar";
const Home = () => (
    
  <div className="max-w-2xl ml-2">
    <RightSidebar  className="hidden lg:block w-72 shrink-0" />
    <CreatePost />
    <Stories />
  </div>
);

export default Home;