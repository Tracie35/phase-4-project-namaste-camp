import React from 'react'



function SignUp() {
  function handlesubmit(e){

  e.preventDefault();
    setErrors([])
    
    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, 
            password,
            password_confirmation,
            
    
    })
    }).then((r) => {
        if(r.ok){
            r.json().then((user) => setUser(user ))
        } else {
            r.json().then((err) => setErrors(err.errors))
        }
    }) 
    
    } 
    
  return (
    <div>

    <section class="bg-white dark:bg-gray-900">
        <div class="flex justify-center min-h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/5" style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661962865038-d2c86f821a35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZsb3dlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')"}}>
            </div>
    
            <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div class="w-full">
                    <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                        Get your free account now.
                    </h1>
    
                    <p class="mt-4 text-gray-500 dark:text-gray-400">
                        Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                    </p>
    
                    <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handlesubmit}>
                        <div>
                            <label htmlFor="firstname"class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                            <input id='firstname' value={name}  onChange={(e)=> setname(e.target.value)}   type="text" placeholder="First Name" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div>
                            <label  htmlFor="password"class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                            <input id='password' value={password}  onChange={(e)=> setPassword(e.target.value)} autoComplete="current-password" type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <button  type='submit'
                            class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Sign Up </span>
    
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                        </form>
                </div>
            </div>
        </div>
    </section>
        </div>
      )
    }
    export default SignUp
                        
    
                       
  
                       
    
                        
    
                        
    
                       
                       
    
    
    
    
  
