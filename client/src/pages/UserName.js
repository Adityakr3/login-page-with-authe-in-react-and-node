import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import image from "../asset/images/pic.webp"
import style from "../style/UserName.module.css"

export function UserName() {
  const [email , setEmail] = useState("");
  const SendOtp = (e) => {
    e.preventDefault();
    if(email === ""){
        toast.error("ENTER A VALID MAIL")
    }
    else if(!email.includes('@')){
        toast.error("PLEASE ADD A VALID MAIL")
    }
    else{
        toast.success("Login Done 😄")
    }
  };

  return (
    <div className={style.main}>
      <div id={style.container}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://cdn.iconscout.com/icon/free/png-512/free-ecommerce-3713043-3096502.png?f=webp&w=256"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className={style.avtar}>
                <img src={image} alt="" srcset="" />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                onClick={SendOtp}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a account?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create a account 😁
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
