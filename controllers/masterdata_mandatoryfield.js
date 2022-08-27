/** Express router providing Masterdata_Mandatoryfield related routes
 *
 * @module routers/Masterdata_Mandatoryfield
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
const Masterdata_Mandatoryfield = models.Masterdata_Mandatoryfield;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list masterdata_mandatoryfield records
 * @route {GET} /masterdata_mandatoryfield/index/{fieldname}/{fieldvalue}
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
			let searchFields = Masterdata_Mandatoryfield.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Masterdata_Mandatoryfield.getOrderBy(req, 'desc');
		query.attributes = Masterdata_Mandatoryfield.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Masterdata_Mandatoryfield.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Masterdata_Mandatoryfield record
 * @route {GET} /masterdata_mandatoryfield/view/{recid}
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
		query.attributes = Masterdata_Mandatoryfield.viewFields();
		let record = await Masterdata_Mandatoryfield.findOne(query);
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
 * Route to insert Masterdata_Mandatoryfield record
 * @route {POST} /masterdata_mandatoryfield/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('nmkolom').optional({nullable: true, checkFalsy: true}),
		body('nmtabel').optional({nullable: true, checkFalsy: true}),
		body('mandatory').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmform').optional({nullable: true, checkFalsy: true}),
		body('judulfield').optional({nullable: true, checkFalsy: true}),
		body('idproduk').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Masterdata_Mandatoryfield record
		let record = await Masterdata_Mandatoryfield.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Masterdata_Mandatoryfield record for edit
 * @route {GET} /masterdata_mandatoryfield/edit/{recid}
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
		query.attributes = Masterdata_Mandatoryfield.editFields();
		let record = await Masterdata_Mandatoryfield.findOne(query);
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
 * Route to update  Masterdata_Mandatoryfield record
 * @route {POST} /masterdata_mandatoryfield/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('nmkolom').optional({nullable: true, checkFalsy: true}),
		body('nmtabel').optional({nullable: true, checkFalsy: true}),
		body('mandatory').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmform').optional({nullable: true, checkFalsy: true}),
		body('judulfield').optional({nullable: true, checkFalsy: true}),
		body('idproduk').optional({nullable: true, checkFalsy: true}).isNumeric(),
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
		query.attributes = Masterdata_Mandatoryfield.editFields();
		let record = await Masterdata_Mandatoryfield.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Masterdata_Mandatoryfield.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Masterdata_Mandatoryfield record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /masterdata_mandatoryfield/delete/{recid}
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
		let records = await Masterdata_Mandatoryfield.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Masterdata_Mandatoryfield.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
