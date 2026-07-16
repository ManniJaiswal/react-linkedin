export default function ProfileSidebar(){
    return(
        <div className="flex-1">
            <div className="border-gray-300 shadow-lg bg-white rounded-2xl">
            <div className="h-52 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 rounded-t-2xl shadow-lg ">
            </div>
            <div className="-mt-22 p-6">
            <img className="h-30 w-30 rounded-full border border-white" src="https://i.pravatar.cc/160?img=12"></img>
            <h1 className="font-bold text-3xl">Alex Morgan</h1>
            <p className="text-12px text-gray-500">Senior Product Designer · Building delightful SaaS</p>
            <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-3.5 w-3.5" aria-hidden="true" className=" h-3 w-3 text-gray-500"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <p className="text-sm text-gray-500">San Francisco, CA</p>
                .
                <p className="text-blue-500 hover:underline cursor-pointer text-sm">842 connections</p>
                </div>
                <button className="inline-flex border border-gray-100 bg-white rounded-4xl py-2 px-8 shadow-lg gap-4 items-center hover:bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil mr-1.5 h-4 w-4" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                    <p>Edit</p>
                </button>
            
            </div>
            </div>
            </div>
            <div className="flex items-center justify-between gap-2 my-4">
                <div className="flex items-center gap-2 bg-white border border-gray-300 shadow-lg px-4 py-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-5 w-5" aria-hidden="true" className="bg-blue-100 text-blue-500 rounded-2xl p-2 h-10 w-10"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    <div>
                        <p className="text-2xl font-bold">842</p>
                        <p className="text-sm text-gray-500">Connections</p>
                    </div>

                </div>
                <div className="flex items-center gap-2 bg-white border border-gray-300 shadow-lg px-4 py-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-5 w-5" aria-hidden="true" className="bg-blue-100 text-blue-500 rounded-2xl p-2 h-10 w-10"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                       <div>
                        <p className="text-2xl font-bold">56</p>
                        <p className="text-sm text-gray-500">Posts</p>
                       </div>
                </div>
                <div className="flex items-center gap-2 bg-white border border-gray-300 shadow-lg px-4 py-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-5 w-5" aria-hidden="true" className="bg-blue-100 text-blue-500 rounded-2xl p-2 h-10 w-10"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <div>
                        <p className="text-2xl font-bold">1248</p>
                        <p className="text-sm text-gray-500">ProfilE visits</p>
                    </div>
                </div>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg px-4 py-2 rounded-xl">
                <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">About</p>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4 text-muted-foreground" aria-hidden="true" className="h-8 w-8 text-gray-500 hover:bg-green-500 rounded-sm p-2 cursor-pointer"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg></button>

            </div>
            <p className="text-sm text-gray-500 py-2">Product designer with 8+ years of experience shaping clean, accessible interfaces for SaaS and fintech teams. I care about systems, craft, and shipping.</p>
            </div>
            <div className="my-4">
            <div className="bg-white border border-gray-300 shadow-lg px-4 py-2 rounded-xl">
                <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Skills</p>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4 text-muted-foreground" aria-hidden="true" className="h-8 w-8 text-gray-500 hover:bg-green-500 rounded-sm p-2 cursor-pointer"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg></button>

            </div>
            <div className="flex items-center gap-2 py-2">
            
                    <p className="text-xs font-semibold text-blue-500 bg-blue-100 border border-blue-300 shadow-lg px-2 py-1 rounded-3xl">React</p>
                    <p className="text-xs font-semibold text-blue-500 bg-blue-100 border border-blue-300 shadow-lg px-2 py-1 rounded-3xl">Node.js</p>
                    <p className="text-xs font-semibold text-blue-500 bg-blue-100 border border-blue-300 shadow-lg px-2 py-1 rounded-3xl">UI/UX Design</p>
                    <p className="text-xs font-semibold text-blue-500 bg-blue-100 border border-blue-300 shadow-lg px-2 py-1 rounded-3xl">Project Management</p>
                    <p className="text-xs font-semibold text-blue-500 bg-blue-100 border border-blue-300 shadow-lg px-2 py-1 rounded-3xl">TypeScript</p>
                    <p className="text-xs font-semibold text-blue-500 bg-blue-100 border border-blue-300 shadow-lg px-2 py-1 rounded-3xl">Figma</p>
                
            </div>
            </div>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg py-2 px-4">
                              
                    <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Experience</p>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4 text-muted-foreground" aria-hidden="true" className="h-8 w-8 text-gray-500 hover:bg-green-500 rounded-sm p-2 cursor-pointer"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg></button>
            
            </div>
            <div className="flex items-start gap-4 py-2">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-lime-400 to-cyan-500"></div>
                    <div className="flex flex-col">
                    <h3 className="font-semibold text-base">Senior Product Designer</h3>
                    <p className="text-14px  text-gray-500">Linear</p>
                    <p className="text-xs  text-gray-500">2022 – Present · 3 yrs</p>
                    <p className="text-base text-gray-500">Lead design on the issue tracking surface and design system.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 py-2">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-pink-500 from-orange-400 to-yellow-400"></div>
                    <div>
                    <h3 className="font-semibold text-base">Senior Product Designer</h3>
                    <p className="text-14px  text-gray-500">Linear</p>
                    <p className="text-xs  text-gray-500">2022 – Present · 3 yrs</p>
                    <p className="text-base text-gray-500">Designed checkout and billing flows used by millions of merchants.</p>
                    </div>
                </div>
            
                
                


            </div>
            <div className="mt-4">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg py-2 px-4">
                <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Education</p>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4 text-muted-foreground" aria-hidden="true" className="h-8 w-8 text-gray-500 hover:bg-green-500 rounded-sm p-2 cursor-pointer"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg></button>

            </div>
            <div className="flex items-start gap-4 py-2">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-700 via-indigo-700 to-red-700"></div>
                    <div className="flex flex-col">
                    <h3 className="font-semibold text-base">Stanford University</h3>
                    <p className="text-14px  text-gray-500">B.S. Human-Computer Interaction</p>
                    <p className="text-xs  text-gray-500">2014-2018</p>
                    </div>
                </div>
            

            </div>
            </div>
        
        </div>
    )
}