export default function NotificationsSidebar(){
    return(
        <div className="">
            <h1 className="text-3xl font-bold">Notifications</h1>
            <p className="text-base text-gray-500">Stay on top of activity across your network.</p>
            <div className="flex flex-col gap-2 mt-4">
                
                <div className="flex items-center w-150 border justify-between bg-blue-100 border-blue-300 p-3 opacity-80 hover:bg-white rounded-lg gap-4">
                <div className="flex items-center gap-2">
                    <img className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/120?img=47"></img>
                    <div>
                       <p className="text-base font-semibold">Priya Sharma<span className="text-sm text-gray-500 font-normal"> sent you a connection request</span></p>
                       <p className="text-xs text-gray-500">5m ago</p>
                    </div>

                    </div>
                    
                    <div className=" h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                
                
               <div className="flex items-center w-150 border justify-between bg-blue-100 border-blue-300 p-3 opacity-80 hover:bg-white rounded-lg gap-4">
                <div className="flex items-center gap-2">
                <img className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/120?img=49"></img>
                    <div>
                       <p className="text-base font-semibold">Priya Sharma<span className="text-sm text-gray-500 font-normal"> sent you a connection request</span></p>
                       <p className="text-xs text-gray-500">5m ago</p>
                    </div>
                    </div>
                    
                    <div className=" h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center w-150 border justify-between bg-white border-blue-300 p-3 opacity-80 hover:bg-gray-100 rounded-lg gap-4">
                <div className="flex items-center gap-2">
                    <img className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/120?img=33"></img>
                
                    <div>
                       <p className="text-base font-semibold">Priya Sharma<span className="text-sm text-gray-500 font-normal"> sent you a connection request</span></p>
                       <p className="text-xs text-gray-500">5m ago</p>
                    </div>
                    </div>
                    
                
                    </div>
               
               <div className="flex items-center w-150 border justify-between bg-white border-blue-300 p-3 opacity-80 hover:bg-gray-100 rounded-lg gap-4">
                <div className="flex items-center gap-2">
                    <img className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/120?img=44"></img>
                
                    <div>
                       <p className="text-base font-semibold">Priya Sharma<span className="text-sm text-gray-500 font-normal"> sent you a connection request</span></p>
                       <p className="text-xs text-gray-500">5m ago</p>
                    </div>
                    </div>
                    
                    
                    </div>
               
                
                
                
                 </div>
            
        </div>
    )
}