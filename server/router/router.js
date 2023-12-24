import { Router } from 'express';
const router = Router();
// import all controllers

import * as controller from '../controllers/app.controller.js'

//post router

router.route('/register').post(controller.register); // register user
// router.route('/registerMail').post(); // send the email
router.route('/authenticate').post((req,res)=> res.end()); // authenticate user
router.route('/login').post(controller.login); //login in app

// get router

router.get("/user/:username").get(controller.getUser) // user with username
router.get("/generateOTP").get(controller.generateOTP)  // generate otp
router.get("/verifyOTP").get(controller.verifyOTP)  // verify otp
router.get("/createResetSession").get(controller.createResetSession) // reset all varibales

// put router

router.put("/updateuser").put(controller.updateuser) // use to update profile
router.put("/resetPassword").put(controller.resetPassword) // use to reset password

export default router