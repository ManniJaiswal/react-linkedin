export default function RightSidebar() {
    return (
        <>
            <div className="w-96 flex flex-col gap-4 sticky top-20 self-start">
                <div className="rounded-xl p-5 shadow-lg bg-white">
                    <h3 className="text-sm font-semibold">People you may know</h3>
                    <div className="flex items-center justify-between">
                        <ul className="mt-3 space-y-3">
                            <li className="flex items-center gap-3 justify-between">
                                <div className="flex items-center gap-2">
                                <span className="relative flex overflow-hidden rounded-full h-10 w-10 shrink-0"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/120?img=47" /></span>
                                <div>
                                    <p className="text-sm font-medium">Priya Sharma</p>
                                    <p className="text-xs text-gray-500">Frontend Engineer at Vercel</p>
                                </div>
                                </div>
                                <div>
                                    <button className="inline-flex items-center justify-center gap-2 font-medium cursor-pointer border h-8 px-3 text-xs rounded-full hover:bg-green-500 border-transparent bg-gray-100">Connect</button>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 justify-between">
                                <div className="flex items-center gap-2">
                                <span className="relative flex overflow-hidden rounded-full h-10 w-10 shrink-0"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/120?img=33" /></span>
                                <div>
                                    <p className="text-sm font-medium">Daniel Okafor</p>
                                    <p className="text-xs text-gray-500">Engineering Manager at Notion</p>
                                </div>
                                </div>
                                <div>
                                    <button className="inline-flex items-center justify-between gap-2 font-medium cursor-pointer border h-8 px-3 text-xs rounded-full hover:bg-green-500 border-transparent bg-gray-100">Connect</button>

                                </div>
                            </li>
                            <li className="flex items-center gap-3 justify-between">
                                <div className="flex items-center gap-2">
                                <span className="relative flex rounded-full h-10 w-10 shrink-0"><img className="aspect-square h-full w-full rounded-full" src="https://i.pravatar.cc/120?img=49" /></span>
                                <div>
                                    <p className="text-sm font-medium">Mei Tanaka</p>
                                    <p className="text-xs text-gray-500">Product Manager · Ex-Google</p>
                                </div>
                                </div>
                                <div>
                                    <button className="inline-flex items-center justify-between gap-2 font-medium cursor-pointer border h-8 px-3 text-xs rounded-full hover:bg-green-500 border-transparent bg-gray-100">Connect</button>

                                </div>
                            </li>
                            <li className="flex items-center gap-3 justify-between">
                                <div className="flex items-center gap-2">  <span className="relative flex overflow-hidden rounded-full h-10 w-10 shrink-0"><img class="aspect-square h-full w-full" src="https://i.pravatar.cc/120?img=15" /></span>
                                    <div>
                                        <p className="text-sm font-medium">Lucas Romero</p>
                                        <p className="text-xs text-gray-500">Founder & CEO at Driftly</p>
                                    </div></div>
                                <div>
                                    <button className="inline-flex items-center justify-center gap-2 font-medium cursor-pointer border h-8 px-3 text-xs rounded-full hover:bg-green-500 border-transparent bg-gray-100">Connect</button>

                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="rounded-xl shadow-lg p-5 bg-white">
                    <h3 className="text-sm font-semibold py-2">Trending Topics</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="cursor-pointer hover:text-blue-500 text-gray-500">#DesignSystems</li>
                        <li className="cursor-pointer hover:text-blue-500 text-gray-500">#RemoteWork</li>
                        <li className="cursor-pointer hover:text-blue-500 text-gray-500">#AIProductivity</li>
                        <li className="cursor-pointer hover:text-blue-500 text-gray-500">#Startups</li>
                    </ul>
                </div>
            </div>

        </>
    )
}