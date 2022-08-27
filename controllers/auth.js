/** Express router providing user authentication routes
 * @module routers/account
 * @module config - app config
 * @module utils - app utils functions
 * @requires express
 * @requires express-validator - form validation module
 * @requires models- app model module
 */
 const jwt_decode = require('jwt-decode');

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('../config');
const utils = require('../helpers/utils');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');


const models = require('../models/index.js');
const View_Userlogin = models.View_Userlogin;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression


/**
 * Generate jwt token
 * @param {string} userId - current user id
 * @param {string} expiresIn - token expiration duration
 */
function generateUserToken(user){
	let expiresIn = config.auth.jwtDuration + 'm' //in minutes;
	let userid = user.idkar;
	let kodeibs = user.kodeibs;
	let kode_kantor = user.id_cabang;
	let token = jwt.sign({sub: [userid, kodeibs, kode_kantor]},config.app.secret, { expiresIn });
	let info = jwt_decode(token)
	// console.log(kodeibs);
	// console.log(info.sub.kode_ao);
	// console.log(info.sub.slice(1));
	console.log(info);
	return token;
}


/**
 * Get userid from jwt token
 * @param {string} token
 */
function getUserIDFromJwt(token){
	try {
		let decoded = jwt.verify(token, config.app.secret);
		return decoded.sub
	}
	catch (err) {
		throw new Error(err);
	}
}


/**
 * Return user login data
 * @param {object} user - current user
 */
async function getUserLoginData(user){
	// generate a signed jwt for the user
	// let decodetoken = getUserIDFromJwt(user);
	let token = generateUserToken(user); //generate token duration
	return { user, token }; //return user object and token
}


/**
 * Route to login user using credential
 * @route {POST} /auth/login
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/login', [
		body('username').trim().not().isEmpty(),
		body('password').not().isEmpty(),
	], async (req, res, next) => {
	try{
		let errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let { username, password } = req.body;
		let user = await View_Userlogin.findOne({where: { 'username': username}});
		if(!user){
			return res.unauthorized("Username or password not correct");
		}
		if(!utils.passwordVerify(password, user.password)){
			return res.unauthorized("Username or password not correct");
		}
		let loginData = await getUserLoginData(user);
		// console.log(jwt_decode(token));
		return res.ok(loginData);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
