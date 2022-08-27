/** Express router providing Prosesbisnis_Flow_Perlevel related routes
 *
 * @module routers/Prosesbisnis_Flow_Perlevel
 * @module config - app config
 * @module utils - app utils functions
 * @module express-validator - form validation module
 * @module models- app model module
 * @requires express
 */
const express = require('express');
const router = express.Router();
const utils = require('../helpers/utils');
const { body, validationResult } = require('express-validator');
const models = require('../models/index.js');
const Prosesbisnis_Flow_Perlevel = models.Prosesbisnis_Flow_Perlevel;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list prosesbisnis_flow_perlevel records
 * @route {GET} /prosesbisnis_flow_perlevel/index/{fieldname}/{fieldvalue}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req, res) => {  
	try{
		let query = {};  // sequelize query object
		let where = {};  // sequelize where conditions
		let replacements = {};  // sequelize query params
		let fieldname = req.params.fieldname;
		let fieldvalue = req.params.fieldvalue;
		
		if (fieldname){
			where[Op.and] = [
				sequelize.literal(`(${fieldname} = :fieldvalue)`)
			];
			replacements.fieldvalue = fieldvalue;
		}
		let search = req.query.search;
		if(search){
			let searchFields = Prosesbisnis_Flow_Perlevel.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Prosesbisnis_Flow_Perlevel.getOrderBy(req, 'desc');
		query.attributes = Prosesbisnis_Flow_Perlevel.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Prosesbisnis_Flow_Perlevel.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Prosesbisnis_Flow_Perlevel record
 * @route {GET} /prosesbisnis_flow_perlevel/view/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		let recid = req.params.recid || null;
		let query = {}
		let where = {}
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Prosesbisnis_Flow_Perlevel.viewFields();
		let record = await Prosesbisnis_Flow_Perlevel.findOne(query);
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
 * Route to insert Prosesbisnis_Flow_Perlevel record
 * @route {POST} /prosesbisnis_flow_perlevel/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('idflow').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idlevel').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Prosesbisnis_Flow_Perlevel record
		let record = await Prosesbisnis_Flow_Perlevel.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Prosesbisnis_Flow_Perlevel record for edit
 * @route {GET} /prosesbisnis_flow_perlevel/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		let recid = req.params.recid;
		let query = {};
		let where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Prosesbisnis_Flow_Perlevel.editFields();
		let record = await Prosesbisnis_Flow_Perlevel.findOne(query);
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
 * Route to update  Prosesbisnis_Flow_Perlevel record
 * @route {POST} /prosesbisnis_flow_perlevel/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('idflow').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idlevel').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async (req, res) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let recid = req.params.recid;
		let modeldata = req.body;
		let query = {};
		let where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Prosesbisnis_Flow_Perlevel.editFields();
		let record = await Prosesbisnis_Flow_Perlevel.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Prosesbisnis_Flow_Perlevel.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Prosesbisnis_Flow_Perlevel record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /prosesbisnis_flow_perlevel/delete/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		let recid = req.params.recid || '';
		recid = recid.split(',');
		let query = {};
		let where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await Prosesbisnis_Flow_Perlevel.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Prosesbisnis_Flow_Perlevel.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
