export default function NetworkSidebar(){
    return(
        <>
        <div className="">
            <h1 className="text-3xl font-bold">My Network</h1>
            <p className="text-sm text-gray-500">Manage requests and grow your professional circle.</p>
            <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute left-3 top-6.5 h-4 w-4 text-gray-500" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <input type="search" placeholder="Search people by name" id="search"   className="my-4 h-9 w-96 rounded-full pl-10 w-150 py-1 border-2 border-transparent bg-white focus:border-blue-500 focus:outline-none"/>
      </div>
       <div className="flex gap-4 items-center justify-center bg-gray-200 rounded-full p-1 text-gray-500 my-4 w-96">
        
        <button className=" flex items-center text-sm hover:bg-white cursor-pointer rounded-full hover:text-black p-2 h-8">Suggested</button>
        <button className=" flex items-center text-sm hover:bg-white cursor-pointer rounded-full hover:text-black p-2 h-8">Received(2)</button>
        <button className=" flex items-center text-sm hover:bg-white cursor-pointer rounded-full hover:text-black p-2 h-8">Sent(1)</button>
        <button className=" flex items-center text-sm hover:bg-white cursor-pointer rounded-full hover:text-black p-2 h-8">Connections</button>
       </div>
       <div className="grid grid-cols-3 gap-4">
       <div className="rounded-xl border border-transparent shadow-lg w-72">
         <div className="h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-t-xl"></div>
         <div className="-mt-8 flex flex-col items-center px-4 pb-5 text-center">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-4 ring-card"><img className="h-full w-full" src="https://i.pravatar.cc/120?img=47"/></span>
            
            <h3 className="font-sm font-semibold">Priya Sharma</h3>
            <p className="text-sm font-size-24 text-gray-500">Frontend Engineer at Vercel</p>
            <p className="text-xs mt-1.5 text-gray-500">12 mutual connections</p>
         </div>
         <div className="flex gap-4 items-center justify-center bg-gray-200 border border-transparent m-2 cursor-pointer hover:bg-green-500 rounded-full m-4 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
       <button className="">Connect</button>
       </div>
       
       
 
       </div>
       <div className="rounded-xl border border-transparent shadow-lg w-72">
         <div className="h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-t-xl"></div>
         <div className="-mt-8 flex flex-col items-center px-4 pb-5 text-center">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-4 ring-card"><img className="h-full w-full" src="https://i.pravatar.cc/120?img=47"/></span>
            <h3 className="font-sm font-semibold">Priya Sharma</h3>
            <p className="text-sm font-size-24 text-gray-500">Frontend Engineer at Vercel</p>
            <p className="text-xs mt-1.5 text-gray-500">12 mutual connections</p>
         </div>
         <div className="flex gap-4 items-center justify-center bg-gray-200 border border-transparent m-4 cursor-pointer hover:bg-green-500 rounded-full p-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
       <button>Connect</button>
       </div>
       
 
       </div>
       <div className="rounded-xl border border-transparent shadow-lg w-72">
         <div className="h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-t-xl"></div>
         <div className="-mt-8 flex flex-col items-center px-4 pb-5 text-center">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-4 ring-card"><img className="h-full w-full" src="https://i.pravatar.cc/120?img=47"/></span>
            <h3 className="font-sm font-semibold">Priya Sharma</h3>
            <p className="text-sm font-size-24 text-gray-500">Frontend Engineer at Vercel</p>
            <p className="text-xs mt-1.5 text-gray-500">12 mutual connections</p>
         </div>
         <div className="flex gap-4 items-center justify-center bg-gray-200 border border-transparent m-4 cursor-pointer hover:bg-green-500 rounded-full p-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
       <button>Connect</button>
       </div>
       
 
       </div>
       <div className="rounded-xl border border-transparent shadow-lg w-72">
         <div className="h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-t-xl"></div>
         <div className="-mt-8 flex flex-col items-center px-4 pb-5 text-center">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-4 ring-card"><img className="h-full w-full" src="https://i.pravatar.cc/120?img=47"/></span>
            <h3 className="font-sm font-semibold">Priya Sharma</h3>
            <p className="text-sm font-size-24 text-gray-500">Frontend Engineer at Vercel</p>
            <p className="text-xs mt-1.5 text-gray-500">12 mutual connections</p>
         </div>
         <div className="flex gap-4 items-center justify-center bg-gray-200 border border-transparent m-4 cursor-pointer hover:bg-green-500 rounded-full p-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
       <button>Connect</button>
       </div>
       
 
       </div>
       <div className="rounded-xl border border-transparent shadow-lg w-72">
         <div className="h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-t-xl"></div>
         <div className="-mt-8 flex flex-col items-center px-4 pb-5 text-center">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-4 ring-card"><img className="h-full w-full" src="https://i.pravatar.cc/120?img=47"/></span>
            <h3 className="font-sm font-semibold">Priya Sharma</h3>
            <p className="text-sm font-size-24 text-gray-500">Frontend Engineer at Vercel</p>
            <p className="text-xs mt-1.5 text-gray-500">12 mutual connections</p>
         </div>
         <div className="flex gap-4 items-center justify-center bg-gray-200 border border-transparent m-4 cursor-pointer hover:bg-green-500 rounded-full p-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
       <button>Connect</button>
       </div>
       
 
       </div>
       <div className="rounded-xl border border-transparent shadow-lg w-72">
         <div className="h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-t-xl"></div>
         <div className="-mt-8 flex flex-col items-center px-4 pb-5 text-center">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 ring-4 ring-card"><img className="h-full w-full" src="https://i.pravatar.cc/120?img=47"/></span>
            <h3 className="font-sm font-semibold">Priya Sharma</h3>
            <p className="text-sm font-size-24 text-gray-500">Frontend Engineer at Vercel</p>
            <p className="text-xs mt-1.5 text-gray-500">12 mutual connections</p>
         </div>
         <div className="flex gap-4 items-center justify-center bg-gray-200 border border-transparent m-4 cursor-pointer hover:bg-green-500 rounded-full p-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
       <button>Connect</button>
       </div>
       </div>
       
 
       </div>
       
        </div>
    
        </>
    )
}