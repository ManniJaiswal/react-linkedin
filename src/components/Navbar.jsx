function Navbar()
{
    return(
    <>
    <header className="sticky top-0 z-30 bg-white opacity-100">
    <div className="flex justify-between mx-auto h-16 max-w-7xl items-center gap-4 px-4">
        <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase h-5 w-5" aria-hidden="true" className="bg-blue-500 rounded-xl text-white h-9 w-9 p-2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
        <p className="text-lg font-bold">ConnectPro</p>
        </div>
        <div className="relative w-[400px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <input type="search" placeholder="Search people,posts,companies..." id="search"   className="h-9 w-full rounded-full bg-gray-200 pl-10 pr-3 py-1 border border-transparent focus:bg-white focus:border-blue-500 focus:outline-none"/>
        </div>
        <div className="flex items-center gap-2 ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell h-5 w-5 text-muted-foreground" aria-hidden="true" className="rounded-full cursor-pointer hover:bg-gray-200 transition"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
        <span className="relative flex shrink-0 rounded-full h-9 w-9 ring-2 ring-transparent transition hover:ring-primary/30"><img className="rounded-full cursor-pointer hover:bg-blue-500 transition h-full w-full object-cover" src="https://i.pravatar.cc/160?img=12"/></span>
        </div>
        
    
    </div>
    </header>

        
        </>
    )
}
export default Navbar;