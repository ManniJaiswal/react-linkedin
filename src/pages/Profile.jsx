import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import ProfileSidebar from "../components/ProfileSidebar";


export default function Profile(){
    return(
    <>
        <Navbar />
            <div className="bg-blue-50">
        <div className="flex gap-6 p-6">

        <LeftSidebar />
        <ProfileSidebar />
        </div>
        </div>
    
        </>

    
    )
}