import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import NetworkSidebar from "../components/NetworkSidebar";

export default function MyNetwork(){
    return(
        <>
        <Navbar />
        <div className="flex items-center p-6 gap-6 bg-gray-100">
        <LeftSidebar />
        <NetworkSidebar />
        </div>
        
        </>
    )
}