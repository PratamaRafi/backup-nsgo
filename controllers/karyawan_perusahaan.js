/** Express router providing Karyawan_Perusahaan related routes
 *
 * @module routers/Karyawan_Perusahaan
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
const Karyawan_Perusahaan = models.Karyawan_Perusahaan;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list karyawan_perusahaan records
 * @route {GET} /karyawan_perusahaan/index/{fieldname}/{fieldvalue}
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
			let searchFields = Karyawan_Perusahaan.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Karyawan_Perusahaan.getOrderBy(req, 'desc');
		query.attributes = Karyawan_Perusahaan.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Karyawan_Perusahaan.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Karyawan_Perusahaan record
 * @route {GET} /karyawan_perusahaan/view/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		let recid = req.params.recid || null;
		let query = {}
		let where = {}
		where['id_perusahaan'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Karyawan_Perusahaan.viewFields();
		let record = await Karyawan_Perusahaan.findOne(query);
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
 * Route to insert Karyawan_Perusahaan record
 * @route {POST} /karyawan_perusahaan/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('desc_perusahaan').optional({nullable: true, checkFalsy: true}),
		body('prefix').optional({nullable: true, checkFalsy: true}),
		body('alamat').optional({nullable: true, checkFalsy: true}),
		body('telp').optional({nullable: true, checkFalsy: true}),
		body('id_ibs').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_pm').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('email').not().isEmpty().isEmail(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Karyawan_Perusahaan record
		let record = await Karyawan_Perusahaan.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id_perusahaan'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Karyawan_Perusahaan record for edit
 * @route {GET} /karyawan_perusahaan/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		let recid = req.params.recid;
		let query = {};
		let where = {};
		where['id_perusahaan'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Karyawan_Perusahaan.editFields();
		let record = await Karyawan_Perusahaan.findOne(query);
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
 * Route to update  Karyawan_Perusahaan record
 * @route {POST} /karyawan_perusahaan/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('desc_perusahaan').optional({nullable: true, checkFalsy: true}),
		body('prefix').optional({nullable: true, checkFalsy: true}),
		body('alamat').optional({nullable: true, checkFalsy: true}),
		body('telp').optional({nullable: true, checkFalsy: true}),
		body('id_ibs').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_pm').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('email').optional({nullable: true}).not().isEmpty().isEmail(),
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
		where['id_perusahaan'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Karyawan_Perusahaan.editFields();
		let record = await Karyawan_Perusahaan.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Karyawan_Perusahaan.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Karyawan_Perusahaan record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /karyawan_perusahaan/delete/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		let recid = req.params.recid || '';
		recid = recid.split(',');
		let query = {};
		let where = {};
		where['id_perusahaan'] = recid;
		query.raw = true;
		query.where = where;
		let records = await Karyawan_Perusahaan.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Karyawan_Perusahaan.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
