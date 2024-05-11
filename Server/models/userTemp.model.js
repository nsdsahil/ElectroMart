const monogoose = require("mongoose");

const userTempSchema = new monogoose.Schema({
	email: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
    otp:{
        type:Number,
        required:true
    },
	dob: String,
	gender: String,
	password: {
		type: String,
		required: true,
	},
});
const UserTempModel = monogoose.model("tempUser", userTempSchema);
module.exports = UserTempModel;
