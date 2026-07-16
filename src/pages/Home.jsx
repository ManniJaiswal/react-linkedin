import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";
export default function Home() {
  return (
    <>
    
      <Navbar />
      <div className="flex items-center justify-center gap-4 p-4 bg-blue-50">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
      </div>
  
      
    </>
  );
}