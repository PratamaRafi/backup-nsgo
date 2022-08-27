/** Express router providing Karyawan_Marketingprospek related routes
 *
 * @module routers/Karyawan_Marketingprospek
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
const Karyawan_Marketingprospek = models.Karyawan_Marketingprospek;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list karyawan_marketingprospek records
 * @route {GET} /karyawan_marketingprospek/index/{fieldname}/{fieldvalue}
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
			let searchFields = Karyawan_Marketingprospek.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Karyawan_Marketingprospek.getOrderBy(req, 'desc');
		query.attributes = Karyawan_Marketingprospek.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Karyawan_Marketingprospek.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Karyawan_Marketingprospek record
 * @route {GET} /karyawan_marketingprospek/view/{recid}
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
		query.attributes = Karyawan_Marketingprospek.viewFields();
		let record = await Karyawan_Marketingprospek.findOne(query);
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
 * Route to insert Karyawan_Marketingprospek record
 * @route {POST} /karyawan_marketingprospek/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_karyawan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_nasabah').optional({nullable: true, checkFalsy: true}),
		body('nm_prospek').optional({nullable: true, checkFalsy: true}),
		body('almt_prospek').optional({nullable: true, checkFalsy: true}),
		body('telp').optional({nullable: true, checkFalsy: true}),
		body('pkerjaan').optional({nullable: true, checkFalsy: true}),
		body('penghasilan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('status_prospek').optional({nullable: true, checkFalsy: true}),
		body('tg_prospek').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Karyawan_Marketingprospek record
		let record = await Karyawan_Marketingprospek.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Karyawan_Marketingprospek record for edit
 * @route {GET} /karyawan_marketingprospek/edit/{recid}
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
		query.attributes = Karyawan_Marketingprospek.editFields();
		let record = await Karyawan_Marketingprospek.findOne(query);
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
 * Route to update  Karyawan_Marketingprospek record
 * @route {POST} /karyawan_marketingprospek/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_karyawan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_nasabah').optional({nullable: true, checkFalsy: true}),
		body('nm_prospek').optional({nullable: true, checkFalsy: true}),
		body('almt_prospek').optional({nullable: true, checkFalsy: true}),
		body('telp').optional({nullable: true, checkFalsy: true}),
		body('pkerjaan').optional({nullable: true, checkFalsy: true}),
		body('penghasilan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('status_prospek').optional({nullable: true, checkFalsy: true}),
		body('tg_prospek').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Karyawan_Marketingprospek.editFields();
		let record = await Karyawan_Marketingprospek.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Karyawan_Marketingprospek.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Karyawan_Marketingprospek record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /karyawan_marketingprospek/delete/{recid}
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
		let records = await Karyawan_Marketingprospek.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Karyawan_Marketingprospek.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
