// making a strong user controller that will have login logout and register?
const nodemailer = require("nodemailer");
const express = require("express");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SibApiV3Sdk = require("@getbrevo/brevo");
const UserModel = require("../models/user.model");
const UserTempModel = require("../models/userTemp.model");
const BlacklistTokenModel = require("../models/blacklistToken");
const cookieParser = require("cookie-parser");
const auth = require("../middlewares/auth.middleware");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
	  user: "sahilroyal91@gmail.com",
	  pass: "ybtwdogzakknnuja",
	},
  });

  
const UserRouter = express.Router();

UserRouter.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).send(users);
	} catch (error) {
		res.status(500).send({
			message: error.message,
		});
	}
});

UserRouter.post("/register", async (req, res) => {
	console.log(req.body);
	const user = await UserModel.findOne({ email: req.body.email });
	const { name, email, dob, gender, password } = req.body;
	try {
		const findingUser = await UserModel.findOne({ email });
		if (findingUser) {
			res.status(200).send({
				msg: "user already exists",
			});
		} else {
			const otp = Math.floor(100000 + Math.random() * 900000);
			console.log(otp);
			const userTemp = new UserTempModel({
				email,
				name,
				otp,
				dob,
				gender,
				password,
			});
			await userTemp.save();
			const mailOptions = {
				from: "sahilroyal91@gmail.com",
				to: email,
				subject: "OTP Verification",
				text: `Your OTP for email verification is: ${otp}`,
			  }
			
			  await transporter.sendMail(mailOptions);
			  res.status(200).send({msg:'otp sent'})
		}
	} catch (error) {	
		res.status(200).send({
			message: error.message,
		});
	}
});
UserRouter.post("/verify", async (req, res) => {
	const { email, otp } = req.body;
	console.log(req.body);
	try {
		const findingUser = await UserTempModel.findOne({ email });
		console.log(findingUser);
		if (!findingUser) {
			res.status(400).send({
				message: "user not found",
			});
		} else {
			if (parseInt(findingUser.otp) == otp) {
				console.log("otp matched")
				const hasedPassword = await bcrypt.hash(findingUser.password, 10);
				const user = new UserModel({
					email,
					name: findingUser.name,
					dob: findingUser.dob,
					gender: findingUser.gender,
					password: hasedPassword,
				});
				await user.save();
				await UserTempModel.deleteOne({ email: findingUser.email });
				console.log("user registered")
				res.status(200).send({
					msg: "user registered",
				});
			}
			else {
				throw new Error({
					msg: "wrong otp",
				});
			}
		}
	} catch (error) {
		res.status(400).send({
			msg: error.message,
		});
	}
});

UserRouter.post("/login", async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);
	try {
		const findingUser = await User.findOne({ email });
		if (!findingUser) {
			res.status(400).send({
				message: "user not found",
			});
		} else {
			const isMatch = await bcrypt.compare(password, findingUser.password);
			if (!isMatch) {
				res.status(400).send({
					message: "wrong password",
				});
			} else {
				const token = jwt.sign({ email }, process.env.SECRET_KEY, {
					expiresIn: "1h",
				});
				res.cookie("token", token, {
					httpOnly: true,
					secure: true,
					maxAge: 3600000,
					sameSite: "none",
				});
				const refreshToken = jwt.sign({ email }, process.env.REFRESH_KEY, {
					expiresIn: "1d",
				});
				res.cookie("refreshToken", refreshToken, {
					httpOnly: true,
					secure: true,
					maxAge: 3600000,
					sameSite: "none",
				});
				res.status(200).send({
					message: "user logged in successfully",
				});
			}
		}
	} catch (error) {
		res.status(400).send({
			message: error.message,
		});
	}
});
UserRouter.get("/logout", auth, async (req, res) => {
	const token = req.cookies.token;
	const refreshToken = req.cookies.refreshToken;
	console.log("logout sucessfully")
	try {
		const blacklist = new BlacklistTokenModel({
			token,
			refreshToken,
		});
		await blacklist.save();
		res.send({ msg: "logout successful" });
	} catch (err) {
		res.send({ err: err, msg: err.message });
	}
});

module.exports = UserRouter;
