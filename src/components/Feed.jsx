export default function Feed()
{
    return(
        <>
        <div className="flex flex-col gap-4 min-w-0 mx-2xl">
        <div className="rounded-xl p-4 shadow-lg bg-white">
            <div className="flex items-start gap-3">
                <span class="relative flex overflow-hidden rounded-full h-11 w-11 shrink-0"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/160?img=12"/></span>
                <textarea  className="flex w-full border border-gray-300 px-3 py-2 text-base shadow-sm disabled-opacity-50 md:text-sm min-h-[60px] resize-none rounded-2xl bg-gray-100 focus:border-blue-500 outline-none"placeholder="What's on your mind, Alex?"></textarea>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <div className="flex flex-wrap gap-1">
                <div className="items-center justify-center gap-2 font-medium cursor-pointer h-8 rounded-md px-3 text-xs text-muted-foreground hidden sm:inline-flex hover:bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image mr-1.5 h-4 w-4 text-primary" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>

                    <button>Photo</button>
                </div>
                <div className="items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer  h-8 rounded-md px-3 text-xs text-muted-foreground hidden sm:inline-flex hover:bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar mr-1.5 h-4 w-4 text-accent" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                    <button>Event</button>
                </div>
                <div class="items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer h-8 rounded-md px-3 text-xs hidden sm:inline-flex hover:bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text mr-1.5 h-4 w-4 text-primary" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>

                 <button>Article</button>
                </div>
                </div>
                <div>
                    <button class="inline-flex items-center justify-center gap-2 text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 rounded-full px-5 hover:bg-green-500">Post</button>
                </div>
            
            </div>
        </div>
        <div className="rounded-xl bg-white shadow-lg p-0">
        <div className="flex items-center gap-2 p-4">

            <span class="relative flex overflow-hidden rounded-full h-11 w-11 shrink-0"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/120?img=49"/></span>
                <div className="flex flex-col">
                <div className="flex items-center gap-2">
                <span className="truncate text-sm font-semibold">Mei Tanaka</span>
                <span className="text-xs text-muted-foreground">· 2h</span>
                </div>
                <div>
                   <p className="truncate text-xs text-muted-foreground"> Product Manager · Ex-Google</p>
                </div>
                </div>
            </div>
            <div className="px-5 pb-4 text-sm leading-relaxed">Shipped a new onboarding flow today — cut activation friction by 38%. Small wins compound. 🚀</div>
            <div>
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&amp;q=70" alt="" className="max-h-[480px] w-full object-cover"></img>
            </div>
            <div className="flex items-center justify-between px-5 py-2 text-xs">
                <span className="text-gray-500">124 likes</span>
                <button className="hover:text-primary text-gray-500">2 comments</button>
            </div>
            <div className="grid grid-cols-3 border-t border-border">
                <button className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium hover:bg-gray-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-4 w-4" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                    Like
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium hover:bg-gray-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle h-4 w-4" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                    Comment
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium hover:bg-gray-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2 lucide-share-2 h-4 w-4" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                    Share
                </button>
            </div>
        
        </div>
        <div className="rounded-xl shadow-lg bg-white p-0">
            <div className="flex items-start gap-3 p-5">
                <span className="relative flex overflow-hidden rounded-full h-11 w-11 shrink-0"><img src="https://i.pravatar.cc/160?img=12"/></span>
                <div className="flex flex-col">
                <span className="text-sm font-sm">Alex Morgan</span>
                <p className="text-xs text-gray-500">Senior Product Designer · Building delightful SaaS</p>
                </div>
            </div>
            <div className="px-5 pb-4 text-sm leading-relaxed">Hot take: the best design systems aren't the most thorough — they're the ones teams actually adopt.</div>
            <div className="flex items-center justify-between px-5 py-2 text-xs">
                <span className="text-gray-500">312 likes</span>
                <button className="hover:text-primary text-gray-500">1 comments</button>
            </div>
            <div className="grid grid-cols-3 border-t border-border">
                <button className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium hover:bg-gray-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-4 w-4" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                    Like
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium hover:bg-gray-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle h-4 w-4" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                    Comment
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium hover:bg-gray-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2 lucide-share-2 h-4 w-4" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                    Share
                </button>
            </div>
            
        </div>
        <div className="rounded-xl shadow-lg bg-white p-0">
            <div className="flex items-start gap-3 p-5">
                <span class="relative flex overflow-hidden rounded-full h-11 w-11 shrink-0"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/120?img=15"/></span>
                <div className="flex flex-col">
                <span className="text-sm font-sm">Lucas Romero</span>
                <p className="text-xs text-gray-500">Founder & CEO at Driftly</p>
                </div>
            </div>
            <div className="px-5 pb-4 text-sm leading-relaxed">We're hiring two senior engineers at Driftly. Remote-first, async-first. DM if interested.</div>
            <div className="flex items-center justify-between px-5 py-2 text-xs">
                <span className="text-gray-500">89 likes</span>
                <button className="hover:text-primary text-gray-500">0 comments</button>
            </div>
            <div className="grid grid-cols-3 border-t border-border">
                <button className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium hover:bg-gray-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-4 w-4" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                    Like
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium hover:bg-gray-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle h-4 w-4" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                    Comment
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium hover:bg-gray-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2 lucide-share-2 h-4 w-4" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                    Share
                </button>
            </div>
            
        </div>
        </div>


        </>
    )
}