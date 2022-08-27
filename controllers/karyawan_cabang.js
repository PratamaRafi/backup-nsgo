/** Express router providing Karyawan_Cabang related routes
 *
 * @module routers/Karyawan_Cabang
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
const Karyawan_Cabang = models.Karyawan_Cabang;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list karyawan_cabang records
 * @route {GET} /karyawan_cabang/index/{fieldname}/{fieldvalue}
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
			let searchFields = Karyawan_Cabang.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Karyawan_Cabang.getOrderBy(req, 'desc');
		query.attributes = Karyawan_Cabang.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Karyawan_Cabang.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Karyawan_Cabang record
 * @route {GET} /karyawan_cabang/view/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		let recid = req.params.recid || null;
		let query = {}
		let where = {}
		where['id_cabang'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Karyawan_Cabang.viewFields();
		let record = await Karyawan_Cabang.findOne(query);
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
 * Route to insert Karyawan_Cabang record
 * @route {POST} /karyawan_cabang/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('desc_cabang').optional({nullable: true, checkFalsy: true}),
		body('kode_cabang').optional({nullable: true, checkFalsy: true}),
		body('id_pt').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('alamat').optional({nullable: true, checkFalsy: true}),
		body('telp').optional({nullable: true, checkFalsy: true}),
		body('id_ptpm').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('shortname').not().isEmpty(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Karyawan_Cabang record
		let record = await Karyawan_Cabang.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id_cabang'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Karyawan_Cabang record for edit
 * @route {GET} /karyawan_cabang/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		let recid = req.params.recid;
		let query = {};
		let where = {};
		where['id_cabang'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Karyawan_Cabang.editFields();
		let record = await Karyawan_Cabang.findOne(query);
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
 * Route to update  Karyawan_Cabang record
 * @route {POST} /karyawan_cabang/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('desc_cabang').optional({nullable: true, checkFalsy: true}),
		body('kode_cabang').optional({nullable: true, checkFalsy: true}),
		body('id_pt').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('alamat').optional({nullable: true, checkFalsy: true}),
		body('telp').optional({nullable: true, checkFalsy: true}),
		body('id_ptpm').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('shortname').optional({nullable: true}).not().isEmpty(),
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
		where['id_cabang'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Karyawan_Cabang.editFields();
		let record = await Karyawan_Cabang.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Karyawan_Cabang.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Karyawan_Cabang record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /karyawan_cabang/delete/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		let recid = req.params.recid || '';
		recid = recid.split(',');
		let query = {};
		let where = {};
		where['id_cabang'] = recid;
		query.raw = true;
		query.where = where;
		let records = await Karyawan_Cabang.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Karyawan_Cabang.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
