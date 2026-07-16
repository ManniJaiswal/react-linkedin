import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <>
    <div className="w-72 flex flex-col gap-4 sticky top-20 self-start">
    
    <div className="rounded-xl shadow-lg bg-white p-0">
    <div className="h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-t-lg"></div>
    <div className="-mt-8 flex flex-col items-center px-4 pb-5 text-center"> 
        
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16"><img className="aspect-square h-full w-full" src="https://i.pravatar.cc/160?img=12"/></span>
        <p className="mt-3 text-sm font-semibold hover:underline cursor-pointer">Alex Morgan</p>
        <p className="mt-0.5 line-clamp-2 text-xs text-gray-500">Senior Product Designer · Building delightful SaaS</p>
        <div className="mt-4 grid w-full grid-cols-3 gap-2 border-t border-border pt-4 text-left">
            <div>
            <div className="text-sm font-semibold text-blue-500">848</div>
            <div className="text-[11px] uppercase text-gray-500">Connections</div>
        </div>
        <div>
            <div className="text-sm font-semibold text-blue-500">56</div>
            <div className="text-[11px] uppercase text-gray-500">Posts</div>
        </div>

<div>
            <div className="text-sm font-semibold text-blue-500">1248</div>
            <div className="text-[11px] uppercase text-gray-500">Visits</div>
        </div>


        </div>
    </div>
    </div>
    
    


    <div className="rounded-xl shadow-lg p-3 bg-white text-gray-500">
        
        <div className=" flex items-center cursor-pointer gap-3 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house h-[18px] w-[18px]" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <Link to={"/home"}>Home</Link>
        </div>
        
        
        
        
        <div className="flex items-center cursor-pointer gap-3 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-[18px] w-[18px]" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
        <Link to={"/network"}>My Network</Link>
        </div>
    
        
        <div className="flex items-center cursor-pointer gap-3 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user h-[18px] w-[18px]" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <Link to={"/profile"}>Profile</Link>
        </div>
        
        
        <div className="flex items-center cursor-pointer gap-3 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell h-[18px] w-[18px]" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
            <Link to={"/notifications"}>Notifications</Link>
        </div>
        
    
        <div className="flex items-center cursor-pointer gap-3 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings h-[18px] w-[18px]" aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <Link to={"/settings"}>Settings</Link>
        </div>
    
        <div className="flex items-center cursor-pointer gap-3 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out h-[18px] w-[18px]" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
            <Link to={"/logout"}>Logout</Link>
</div>
    </div>
    </div>

    </>
  );
}