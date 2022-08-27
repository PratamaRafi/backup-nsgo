/** Express router providing Dwhclone_Tab related routes
 *
 * @module routers/Dwhclone_Tab
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
const Dwhclone_Tab = models.Dwhclone_Tab;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list dwhclone_tab records
 * @route {GET} /dwhclone_tab/index/{fieldname}/{fieldvalue}
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
			let searchFields = Dwhclone_Tab.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Dwhclone_Tab.getOrderBy(req, 'desc');
		query.attributes = Dwhclone_Tab.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Dwhclone_Tab.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Dwhclone_Tab record
 * @route {GET} /dwhclone_tab/view/{recid}
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
		query.attributes = Dwhclone_Tab.viewFields();
		let record = await Dwhclone_Tab.findOne(query);
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
 * Route to insert Dwhclone_Tab record
 * @route {POST} /dwhclone_tab/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('noktp').optional({nullable: true, checkFalsy: true}),
		body('nasid').optional({nullable: true, checkFalsy: true}),
		body('norek').optional({nullable: true, checkFalsy: true}),
		body('kdfo').optional({nullable: true, checkFalsy: true}),
		body('nmfo').optional({nullable: true, checkFalsy: true}),
		body('kdcab').optional({nullable: true, checkFalsy: true}),
		body('dscab').optional({nullable: true, checkFalsy: true}),
		body('kdbpr').optional({nullable: true, checkFalsy: true}),
		body('dsbpr').optional({nullable: true, checkFalsy: true}),
		body('nmnas').optional({nullable: true, checkFalsy: true}),
		body('desproduk').optional({nullable: true, checkFalsy: true}),
		body('tg_mulai').optional({nullable: true, checkFalsy: true}),
		body('tg_clone').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Dwhclone_Tab record
		let record = await Dwhclone_Tab.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Dwhclone_Tab record for edit
 * @route {GET} /dwhclone_tab/edit/{recid}
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
		query.attributes = Dwhclone_Tab.editFields();
		let record = await Dwhclone_Tab.findOne(query);
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
 * Route to update  Dwhclone_Tab record
 * @route {POST} /dwhclone_tab/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('noktp').optional({nullable: true, checkFalsy: true}),
		body('nasid').optional({nullable: true, checkFalsy: true}),
		body('norek').optional({nullable: true, checkFalsy: true}),
		body('kdfo').optional({nullable: true, checkFalsy: true}),
		body('nmfo').optional({nullable: true, checkFalsy: true}),
		body('kdcab').optional({nullable: true, checkFalsy: true}),
		body('dscab').optional({nullable: true, checkFalsy: true}),
		body('kdbpr').optional({nullable: true, checkFalsy: true}),
		body('dsbpr').optional({nullable: true, checkFalsy: true}),
		body('nmnas').optional({nullable: true, checkFalsy: true}),
		body('desproduk').optional({nullable: true, checkFalsy: true}),
		body('tg_mulai').optional({nullable: true, checkFalsy: true}),
		body('tg_clone').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Dwhclone_Tab.editFields();
		let record = await Dwhclone_Tab.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Dwhclone_Tab.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Dwhclone_Tab record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /dwhclone_tab/delete/{recid}
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
		let records = await Dwhclone_Tab.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Dwhclone_Tab.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
