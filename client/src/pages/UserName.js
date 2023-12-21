import React from "react";
import { Link } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import image from "../asset/images/pic.webp"
import style from "../style/UserName.module.css"
import {useFormik} from 'formik'
import { usernameValidate } from "../helper/Validate";
export function UserName() {

const formik = useFormik({
   initialValues:{
    username:'',
   },
   validate:usernameValidate,
   validateOnBlur:false,
   validateOnChange:false,
   onSubmit: async values => {
     console.log(values);
   }
})

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
            Login to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={formik.handleSubmit} className="space-y-6" action="#" method="POST">
            <div className={style.avtar}>
                <img src={image} alt="" srcset="" />
            </div>
            <div>
              <div className="mt-2">
                <input {...formik.getFieldProps('username') }
                  placeholder="Enter Your UserName"
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  className="block w-full  p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <Link to='/password'
                // onClick={SendOtp}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </Link>
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
    </div>
  );
}
