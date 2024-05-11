const jwt = require("jsonwebtoken");
const BlackListModel = require("../models/blacklistToken");
const dotenv = require("dotenv");
dotenv.config();
const auth = async (req, res, next) => {
	const token = req.cookies.token;
	console.log(token);
	const refreshToken = req.cookies.refreshToken;

	
	jwt.verify(token, "Sears", (err, user) => {
		if (err) {
			console.log(process.env.SECRET_KEY);
			console.log(user);
			if (err.name === "TokenExpiredError") {
				// Token expired, attempt to refresh token
				const refreshToken = req.cookies["refreshToken"];
				if (!refreshToken) {
					return res
						.status(403)
						.send({ message: "Refresh token not provided" });
				}
				try {
					const decoded = jwt.verify(
						refreshToken,
						process.env.REFRESH_TOKEN_SECRET
					);
					const newAccessToken = jwt.sign(
						{ username: decoded.username },
						process.env.ACCESS_TOKEN_SECRET,
						{ expiresIn: "15m" }
					);

					// Send new access token in response
					res.cookie("token", newAccessToken);
					return next();
				} catch (err) {
					return res.status(403).send({ message: "Invalid refresh token" });
				}
			} else {
				return res
					.status(403)
					.send({ message: "Invalid access token", err: err });
			}
		} else {
			next();
			
		}
	});
};

module.exports = auth;
