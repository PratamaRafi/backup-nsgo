/** Express router providing user account related routes
 *
 * @module routers/account
 * @module config - app config
 * @module utils - app utils functions
 * @module express-validator - form validation module
 * @module models- app model module
 * @requires express
 */
const express = require('express');
const router = express.Router();
const config = require('../config');
const utils = require('../helpers/utils');
const uploader = require('../helpers/uploader');
const { body, validationResult } = require('express-validator');


/**
 *  models
 * @const
 */
const models = require('../models/index.js');
const Karyawan_Login = models.Karyawan_Login;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators


/**
 * Route to view user account record
 * @route {GET} /account
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/','/index'], async (req, res) => {
	try{
		let userId = recid = req.user.id;
		let query = {};
		let where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Karyawan_Login.accountviewFields();
		let record = await Karyawan_Login.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  user account record for edit
 * @route {GET} /account/edit
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/edit', async (req, res) => {
	try{
		let userId = recid = req.user.id;
		let query = {};
		let where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Karyawan_Login.accounteditFields();
		let record = await Karyawan_Login.findOne(query);
		if(!record){
			return res.badRequest("No record found");
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  user account record
 * @route {POST} /account/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit' , 
	[
		body('username').optional({nullable: true, checkFalsy: true}),
		body('password').optional({nullable: true, checkFalsy: true}),
		body('confirm_password', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
		body('id_karyawan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('stringpwd').optional({nullable: true, checkFalsy: true}),
	]
, async (req, res) => {
	try{
		// Finds the validation errors in this request and wraps them in an object with handy functions
		let errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let userId = recid = req.user.id;
		let modeldata = req.body;
		let query = {};
		let where = {};
		where['id'] = recid;
		query.where = where;
		query.raw = true;
		query.attributes = Karyawan_Login.accounteditFields();
		let record = await Karyawan_Login.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Karyawan_Login.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});
router.get('/currentuserdata', async function (req, res)
{
	let user = req.user;
    return res.ok(user);
});
module.exports = router;
