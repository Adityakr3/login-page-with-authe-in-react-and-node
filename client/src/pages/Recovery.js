import React from "react";
import { Link } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import style from "../style/UserName.module.css"
export function Recovery() {
  return (
    <div className={style.main}>
      <Toaster className='top-center' reverseOrder={false}></Toaster>
      <div id={style.container}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://cdn.iconscout.com/icon/free/png-512/free-ecommerce-3713043-3096502.png?f=webp&w=256"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Recover for your account 
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="text-sm flex align-middle justify-center text-slate-500">
              <h4>Enter 6 digit OTP send to your email...........</h4>
            </div>
            <div>
              <div className="mt-2">
                <input
                  placeholder="Enter Your OTP"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="block w-full  p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                // onClick={SendOtp}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Recover
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Can't get OTP ?{" "}
            <button
              to="/RE"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
