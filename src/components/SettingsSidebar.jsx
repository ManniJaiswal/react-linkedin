import { useState } from "react";


export default function SettingsSidebar()
{
    
    return(
        
        <> 
    
        <div className="">
             <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-base text-gray-500 py-2">Manage your account, privacy, and preferences.</p>
            <div className="space-y-4">
            <div className="border rounded-lg p-6 bg-white border-gray-200 shadow-lg">
                <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user h-4 w-4" aria-hidden="true" className=" h-8 w-8 text-blue-500 bg-blue-100 border border-blue-200 p-1 rounded-lg "><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
               <p className="font-semibold text-lg">Account</p>
                </div>
                <div className="mt-6">
                <form>
                    <div className="grid grid-cols-[150px_1fr] gap-2 items-center mb-4">
                <label for="email" className="font-medium text-gray-500">Email</label>
                <input type="email" id="email" name="email" className="border border-gray-200 bg-white shadow-lg rounded-lg focus:border-blue-500 w-[400px] p-1"></input>
                </div>
                <div className="grid grid-cols-[150px_1fr] gap-2 items-center font-medium text-gray-500">
                <label for="phone" className="font-medium text-gray-500">Phone</label>
                <input
                className="border border-gray-200 bg-white shadow-lg rounded-lg bg-white shadow-lg rounded-lg focus:border-blue-500  w-[400px] p-1"
                 type="tel"
                 id="phone"
                 name="phone"
                 pattern="[0-9]{10}"
                 maxlength="10"
                 required></input>
                 </div>

                </form>
                </div>
            
            </div>
            <div className="border rounded-lg p-6 bg-white border-gray-200 shadow-lg">
                <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user h-4 w-4" aria-hidden="true" className=" h-8 w-8 text-blue-500 bg-blue-100 border border-blue-200 p-1 rounded-lg "><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
               <p className="font-semibold text-lg">Profile</p>
                </div>
                <div className="mt-6">
                <form>
                    <div className="grid grid-cols-[150px_1fr] gap-2 items-center mb-4">
                <label for="email" className="font-medium text-gray-500">Display Name</label>
                <input type="email" id="email" name="email" className="border border-gray-200 bg-white shadow-lg rounded-lg focus:border-blue-500 w-[400px] p-1"></input>
                </div>
                <div className="grid grid-cols-[150px_1fr] gap-2 items-center font-medium text-gray-500">
                <label for="phone" className="font-medium text-gray-500">Headline</label>
                <input
                className="border border-gray-200 bg-white shadow-lg rounded-lg bg-white shadow-lg rounded-lg focus:border-blue-500  w-[400px] p-1"
                 type="tel"
                 id="phone"
                 name="phone"
                 pattern="[0-9]{10}"
                 maxlength="10"
                 required></input>
                 </div>

                </form>
                </div>
            
            </div>
            <div className="border rounded-lg p-6 bg-white border-gray-200 shadow-lg">
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round h-4 w-4" aria-hidden="true" className=" h-8 w-8 text-blue-500 bg-blue-100 border border-blue-200 p-1 rounded-lg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                 <p className="font-semibold text-lg">Change Password</p>
                </div>
                <div>
                    <form>
                        <div className="grid grid-cols-[150px_1fr] gap-2 items-center mb-4">
                <label for="password" className="font-medium text-gray-500">Current</label>
                <input type="password" id="password" name="password" className="border border-gray-200 bg-white shadow-lg rounded-lg focus:border-blue-500 w-[400px] p-1"></input>
                </div>
                <div className="grid grid-cols-[150px_1fr] gap-2 items-center mb-4">
                <label for="password" className="font-medium text-gray-500">New</label>
                <input type="password" id="password" name="password" className="border border-gray-200 bg-white shadow-lg rounded-lg focus:border-blue-500 w-[400px] p-1"></input>
                </div>
                <div className="grid grid-cols-[150px_1fr] gap-2 items-center">
                <label for="password" className="font-medium text-gray-500">Confirm</label>
                <input type="password" id="password" name="password" className="border border-gray-200 bg-white shadow-lg rounded-lg focus:border-blue-500 w-[400px] p-1"></input>
                </div>
                    </form>
                </div>
                <div className="flex justify-end pt-6">
                    <button className="inline-flex items-center justify-center gap-2 text-sm font-medium cursor-pointer bg-blue-500 shadow-lg text-white hover:opacity-90 h-9 py-2 px-4 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock mr-1.5 h-4 w-4" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>Update password</button>
                
                </div>
            </div>
            <div className="p-6 border rounded-lg p-6 bg-white border-gray-200 shadow-lg">
                <div className="flex gap-2 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-4 w-4" aria-hidden="true" className=" h-8 w-8 text-blue-500 bg-blue-100 border border-blue-200 p-1 rounded-lg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                    <p className="font-semibold text-lg">Privacy</p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold">Public profile</p>
                    <p className="text-xs text-gray-500">Allow anyone to view your profile.</p>
                    </div>
                    <div className="border border-gray-300 bg-gray-200 h-5 w-10 rounded-xl shadow-sm cursor-pointer"></div>
                
                </div>
                <hr className="text-gray-500"></hr>
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-semibold">Show activity</p>
                    <p className="text-xs text-gray-500">Let connections see when you're active.</p>
                    </div>
                    <div className="border border-gray-300 bg-gray-200 h-5 w-10 rounded-xl shadow-sm cursor-pointer"></div>
                </div>
                <hr className="text-gray-500"></hr>
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-semibold">Discoverable by email</p>
                    <p className="text-xs text-gray-500">Allow people to find you by email.</p>
                    </div>
                    <div className="border border-gray-300 bg-gray-200 h-5 w-10 rounded-xl shadow-sm cursor-pointer"></div>
                </div>
                </div>
            </div>
            <div className="p-6 border rounded-lg p-6 bg-white border-gray-200 shadow-lg">
                <div className="flex gap-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell h-4 w-4" aria-hidden="true" className=" h-8 w-8 text-blue-500 bg-blue-100 border border-blue-200 p-1 rounded-lg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                    <p className="font-semibold text-lg">Notifications</p>
                </div>
                 <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-semibold">Public profile</p>
                    <p className="text-xs text-gray-500">Allow anyone to view your profile.</p>
                    </div>
                    <div className="border border-gray-300 bg-gray-200 h-5 w-10 rounded-xl shadow-sm cursor-pointer"></div>
                </div>
                
                <hr className="text-gray-500"></hr>
                
                    <div className="flex items-center justify-between">
                        <div>
                    <p className="text-sm font-semibold">Show activity</p>
                    <p className="text-xs text-gray-500">Let connections see when you're active.</p>
                    </div>
                    <div className="border border-gray-300 bg-gray-200 h-5 w-10 rounded-xl shadow-sm cursor-pointer relative"><div className="relative bg-white h-4 w-4 flex items-center rounded-full"></div></div>
                </div>
                <hr className="text-gray-500"></hr>
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-semibold">Discoverable by email</p>
                    <p className="text-xs text-gray-500">Allow people to find you by email.</p>
                    </div>
                    <div className="border border-gray-300 bg-gray-200 h-5 w-10 rounded-xl shadow-sm cursor-pointer"></div>
                </div>
                </div> 
            </div>
            
</div>
           
        </div>
        </>
    )
}