import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import NotificationSidebar from "../components/NotificationsSidebar";


export default function Notifications(){
    return(
        <>
        <Navbar />
        <div className="bg-blue-50">
            <div className="flex gap-6 max-w-5xl p-6">
            <LeftSidebar />
            <NotificationSidebar />
            </div>
        </div>
        </>
    )
}