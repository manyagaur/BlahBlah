import React, { useState } from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
// useNavigate and axios are not used in this component
// import { useNavigate } from "react-router-dom";

function Login() {
  // State for password (optional, if you want to control input state)
  const [password, setPassword] = useState(""); 

  return (
    <div className="bg-blue-100 ">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-12 sm:col-span-4 lg:col-span-6  bg-blue-400 rounded-lg mt-[7vh] ml-72 mb-[7vh] max-h-[88vh] relative flex sm:flex-col">
        <h1 className="text-4xl font-medium ml-2 mt-20 mb-5 mr-2 ">Welcome to BlahBlah</h1>
                <p className="text-md text-pretty ml-2 mr-2 mb-7 font-semibold">
                BlahBlah is 
                the ultimate social networking hub 
                that turns every conversation into 
                a vibrant experience. Whether 
                you're sharing your latest triumphs, 
                diving into deep discussions, or 
                simply catching up on the buzz, 
                Join us today, and 
                let's turn your chatter into a 
                symphony of connections!
                
                </p>
                
                <p className="mb-2 ml-2  font-semibold">Don't have an account?</p>
                <button
                type="submit"
                
                className="text-lg shadow-xl rounded-xl w-40 h-12 ml-2 bg-white hover:bg-blue-50 text-blue px-12 py-2"
              >
                Register
              </button>
        </div>
        <div className="col-span-12 sm:col-span-8 lg:col-span-6  bg-white mt-[7vh] mr-72 mb-[7vh] max-h-[88vh] rounded-lg ">
          <div className=""></div>
          <div className="min-h-[600px] mt-24 mr-[20px] ml-[20px] xl:ml-[150px] lg:mr-[150px]">
            <div className="font-extrabold text-3xl mt-1 flex items-center">
              <span className="mb-16">Login</span>
              
            </div>
            <form>
              

              <label className="text-lg font-bold" htmlFor="email">
                Email
              </label>
              <br />
              <input
                type="text"
                name="email"
                className="rounded-lg min-h-10 min-w-[90%] p-3 mb-8 border border-gray-400 hover:border-gray-600"
                placeholder="Email"
              />
              <label className="text-lg font-bold">Password</label>
              <br />
              <input
                type="password"
                className="rounded-lg min-h-10 min-w-[90%] p-3 mb-8 border border-gray-400 hover:border-gray-600"
                placeholder="6+ Characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Optional: if you want to manage the password state
                required
              />
              <br />
              <div className="grid grid-cols-12">
                <div className="col-span-1 py-2 px-3">
                  <input type="checkbox" required />
                </div>
                <div className="col-span-11">
                  <span>
                    Logging in an account means you're okay with our{" "}
                    <span className="text-[#5A47BC]">Terms of Service, Privacy Policy</span>, and our default{" "}
                    <span className="text-[#5A47BC]">Notification Settings</span>
                  </span>
                </div>
              </div>

              <br />
              <button
                type="submit"
                
                className="text-lg shadow-xl rounded-xl bg-blue-400 hover:bg-blue-600 text-white px-12 py-2"
              >
                Login Please
              </button>
            </form>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
