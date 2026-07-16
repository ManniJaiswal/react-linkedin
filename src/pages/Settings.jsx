import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import SettingsSidebar from "../components/SettingsSidebar";
export default function Settings(){
    return(
        <>
        <Navbar />
        <div className="flex items-center p-6 gap-6 bg-blue-50">
        <LeftSidebar />
        <SettingsSidebar />
        </div>
        </>
        
    )
}