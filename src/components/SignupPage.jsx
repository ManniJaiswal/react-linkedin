export default function SignupPage()
{
    return(
        <>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
             <div className="flex gap-2 items-center py-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase h-5 w-5" aria-hidden="true" className="bg-blue-500 rounded-xl text-white h-9 w-9 p-2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
    <p className="text-lg font-bold">ConnectPro</p>
    </div>
    <div className="border p-8 rounded-xl border-gray-300 shadow-md bg-white">
        <p className="font-bold text-2xl">Create your account</p>
        <p className="text-gray-500 text-sm mt-1">Join thousands of professionals on ConnectPro.</p>
        <div className="flex items-center gap-4 mt-4 mb-4">
            <label className=" relative w-20 h-20 rounded-full border-2 border-gray-200 bg-blue-50 flex items-center justify-center cursor-pointer">
    <input type="file" className="hidden" />

           
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera h-6 w-6 text-muted-foreground" aria-hidden="true"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                      </label>
            
            
            <div>

                <p className="text-sm font-medium font-semibold">Profile photo</p>
                <p className="text-xs text-gray-600">PNG or JPG, up to 2MB.</p>
            </div>
        </div>
    
    <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
        <div>
    <label className="block text-sm font-medium mb-1">
      First Name
    </label>
    <input
      type="text"
      className="w-full border rounded-lg px-2 py-1 shadow-md   border border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Last Name
    </label>
    <input
      type="text"
      className="w-full border rounded-lg px-2 py-1 shadow-md   border border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none"
    />
  </div>
  </div>
  <div>
    <label className="block text-sm font-medium mb-1">
      Email
    </label>
    <input
      type="email"
      className="w-full border rounded-lg px-2 py-1 shadow-md   border border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none"
    />
  </div>
  <div>
    <label className="block text-sm font-medium mb-1">
      Phone Number
    </label>
    <input
      type="tel"
      className="w-full border rounded-lg px-2 py-1 shadow-md   border border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none"
    />
  </div>
  <div className="flex items-center gap-4">
  <div>
    <label className="block text-sm font-medium mb-1">
      Password
    </label>
    <input
      type="password"
      className="w-full border rounded-lg px-2 py-1 shadow-md   border border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none"
    />
  </div>
  <div>
    <label className="block text-sm font-medium mb-1">
      Confirm Password
    </label>
    <input
      type="password"
      className="w-full border rounded-lg px-2 py-1 shadow-md   border border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none"
    />
  </div>
  </div>
   <button className="text-white bg-blue-600 rounded-3xl py-2 w-full px-10">Create Account</button>
  
    <p className="text-sm text-gray-500 text-center">Already have an account?   
    <span className="text-blue-600 font-medium hover:underline cursor-pointer">
  
    Log in
    </span>
  </p>



    </div>
    </div>
    </div>
    
        </div>

        </>
    )
}