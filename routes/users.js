import express, { json } from "express";
import { userModel } from "../database/model.js";
import bcrypt from 'bcrypt';
import { authenticate } from "../middleware/auth.js";

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with all users");
});

router.post('/login', )

router.post("/data", authenticate, async(req, res, next) => {

  const salt  = await bcrypt.genSalt(10);
  let generatedPassword = await bcrypt.hash('12345678', salt);

  let obj = {
    name: 'Umair',
    email: 'umair.pervaiz@enlatics.com',
    password: generatedPassword,
  }
  // let user = new userModel(obj).save();

  res.status(200).json({
    erorr: false,
    // user: user,
    user: 'adf',
  });
});

export default router;
