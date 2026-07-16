import { Link } from "react-router-dom";

export default function LogoutSidebar()
    {
        return(
            <>
    <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col h-full">

  <div className="flex gap-2 items-center p-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase h-5 w-5" aria-hidden="true" className="bg-blue-500 rounded-xl text-white h-9 w-9 p-2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
    <p className="text-lg font-bold">ConnectPro</p>
    </div>
    <div className=" max-w-[50%] mx-auto flex flex-col self-start justify-center">
        <p className="font-bold text-3xl">Welcome back</p>
        <p className="text-gray-500 text-md mt-2">Sign in to continue building your network.</p>
        <div className="flex flex-col mt-6 gap-4">
        <div>
            <label className=" text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="you@company.com"
          className="w-full border border-gray-200 shadow-md rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        </div>
              <div>
                <div className="flex justify-between items-center mb-1 ">
        <label className="text-sm font-medium">
          Password
        </label>
        <button
    type="button"
    className="text-sm font-semibold text-blue-600 hover:underline"
  >
    Forgot Password?
  </button>
  </div>

        
        <input
          type="password"
          placeholder="......"
          className="w-full border border-gray-300 rounded-lg p-1 shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
        <div className="flex items-center gap-2">
        <input type="checkbox" className="h-4 w-4"/>
              <label className="text-sm text-gray-700">
        Remember me for 30 days
      </label>

        </div>
        <div>
        <button className="text-white bg-blue-600 rounded-3xl py-2 w-full px-10">Log in</button>
      </div>
      <p className="text-sm text-gray-500 text-center">New to ConnectPro?   <Link
    to={"/signup"}
    className="text-blue-600 font-medium hover:underline"
  >
    Create an account
  </Link></p>

</div>

    </div>
    



        </div>
        <div className="bg-blue-500 p-10 flex flex-col justify-between">
            <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">Grow the network that grows your career.</h1>
            <p className="text-md text-white">ConnectPro is where modern professionals share work, discover opportunities, and build relationships that compound.</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2 bg-white/10 p-4 rounded-3xl">
                   
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-5 w-5" aria-hidden="true" className="text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                 <div>
                    <p className="text-white text-2xl font-bold">2.4M</p>
                    <p className="text-xs text-gray-200">Members</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 bg-white/10 p-4 rounded-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-5 w-5" aria-hidden="true" className="text-white"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                   
                 <div>
                    <p className="text-white text-2xl font-bold">2.4M</p>
                    <p className="text-xs text-gray-200">Members</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 bg-white/10 p-4 rounded-3xl">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase h-5 w-5" aria-hidden="true" className="text-white"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                 <div>
                    <p className="text-white text-2xl font-bold">2.4M</p>
                    <p className="text-xs text-gray-200">Members</p>
                    </div>
                </div>
            </div>
            </div>

        
        

    </div>
            
            </>
        )
    }
