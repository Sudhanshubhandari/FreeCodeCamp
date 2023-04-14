
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const SignInHandler = () => {
    navigate("/SignIn");
  };
  const HomeredirectHandler=()=>{
    navigate('/')
  }

  return (
    <div className="flex flex-row bbg items-center justify-between p-1.5 box-border">
   
        <div className="w-3/12">
        {window.location.pathname !== "/SignIn" &&
      window.location.pathname !== "/SignUp" && (
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="h-10 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search 8000+ tutorials"
                required
              />
            </div>
          </form>
          )}
        </div>
      

      <div className="flex w-3/12 " >
        <h1 className="text-white hover:cursor-pointer" onClick={HomeredirectHandler}>freeCodeCamp (<i class="uil uil-fire " style={{ fontSize: '24px' }}></i>) </h1>
      </div>
      
      <div className="flex flex-row">
      {window.location.pathname !== "/SignIn" &&
      window.location.pathname !== "/SignUp" && (
        <div className="flex justify-center items-center">
        <button
          className="border-2 border-white text-white mr-2 p-1"
          type="button"
        >
          Menu
        </button>
        {window.location.pathname !== "/Courses"&&
        (<button
          className="bg-yellow-600 p-1"
          type="button"
          onClick={SignInHandler}
        >
          Sign in
        </button>)}
        {window.location.pathname === "/Courses"&&
        (<button className="p-1">
        <i className="uil uil-user-circle text-3xl  bg-white "></i></button>)
        }
        </div>
      
      )}
      </div>
      
    </div>
      
  );
};

export default Header;
