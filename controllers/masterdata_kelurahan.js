/** Express router providing Masterdata_Kelurahan related routes
 *
 * @module routers/Masterdata_Kelurahan
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
const Masterdata_Kelurahan = models.Masterdata_Kelurahan;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list masterdata_kelurahan records
 * @route {GET} /masterdata_kelurahan/index/{fieldname}/{fieldvalue}
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
			let searchFields = Masterdata_Kelurahan.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Masterdata_Kelurahan.getOrderBy(req, 'desc');
		query.attributes = Masterdata_Kelurahan.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Masterdata_Kelurahan.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Masterdata_Kelurahan record
 * @route {GET} /masterdata_kelurahan/view/{recid}
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
		query.attributes = Masterdata_Kelurahan.viewFields();
		let record = await Masterdata_Kelurahan.findOne(query);
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
 * Route to insert Masterdata_Kelurahan record
 * @route {POST} /masterdata_kelurahan/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('nmkelurahan').optional({nullable: true, checkFalsy: true}),
		body('sandi').optional({nullable: true, checkFalsy: true}),
		body('kodepos').optional({nullable: true, checkFalsy: true}),
		body('sandi_kecamatan').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Masterdata_Kelurahan record
		let record = await Masterdata_Kelurahan.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Masterdata_Kelurahan record for edit
 * @route {GET} /masterdata_kelurahan/edit/{recid}
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
		query.attributes = Masterdata_Kelurahan.editFields();
		let record = await Masterdata_Kelurahan.findOne(query);
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
 * Route to update  Masterdata_Kelurahan record
 * @route {POST} /masterdata_kelurahan/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('nmkelurahan').optional({nullable: true, checkFalsy: true}),
		body('sandi').optional({nullable: true, checkFalsy: true}),
		body('kodepos').optional({nullable: true, checkFalsy: true}),
		body('sandi_kecamatan').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Masterdata_Kelurahan.editFields();
		let record = await Masterdata_Kelurahan.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Masterdata_Kelurahan.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Masterdata_Kelurahan record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /masterdata_kelurahan/delete/{recid}
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
		let records = await Masterdata_Kelurahan.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Masterdata_Kelurahan.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
