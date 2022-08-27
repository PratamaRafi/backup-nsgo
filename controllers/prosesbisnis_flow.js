/** Express router providing Prosesbisnis_Flow related routes
 *
 * @module routers/Prosesbisnis_Flow
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
const Prosesbisnis_Flow = models.Prosesbisnis_Flow;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list prosesbisnis_flow records
 * @route {GET} /prosesbisnis_flow/index/{fieldname}/{fieldvalue}
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
			let searchFields = Prosesbisnis_Flow.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Prosesbisnis_Flow.getOrderBy(req, 'desc');
		query.attributes = Prosesbisnis_Flow.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Prosesbisnis_Flow.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Prosesbisnis_Flow record
 * @route {GET} /prosesbisnis_flow/view/{recid}
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
		query.attributes = Prosesbisnis_Flow.viewFields();
		let record = await Prosesbisnis_Flow.findOne(query);
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
 * Route to insert Prosesbisnis_Flow record
 * @route {POST} /prosesbisnis_flow/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('nm_proses').optional({nullable: true, checkFalsy: true}),
		body('urlmenu').optional({nullable: true, checkFalsy: true}),
		body('start_tx').optional({nullable: true, checkFalsy: true}),
		body('end_tx').optional({nullable: true, checkFalsy: true}),
		body('deskripsi').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Prosesbisnis_Flow record
		let record = await Prosesbisnis_Flow.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Prosesbisnis_Flow record for edit
 * @route {GET} /prosesbisnis_flow/edit/{recid}
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
		query.attributes = Prosesbisnis_Flow.editFields();
		let record = await Prosesbisnis_Flow.findOne(query);
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
 * Route to update  Prosesbisnis_Flow record
 * @route {POST} /prosesbisnis_flow/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('nm_proses').optional({nullable: true, checkFalsy: true}),
		body('urlmenu').optional({nullable: true, checkFalsy: true}),
		body('start_tx').optional({nullable: true, checkFalsy: true}),
		body('end_tx').optional({nullable: true, checkFalsy: true}),
		body('deskripsi').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Prosesbisnis_Flow.editFields();
		let record = await Prosesbisnis_Flow.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Prosesbisnis_Flow.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Prosesbisnis_Flow record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /prosesbisnis_flow/delete/{recid}
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
		let records = await Prosesbisnis_Flow.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Prosesbisnis_Flow.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
