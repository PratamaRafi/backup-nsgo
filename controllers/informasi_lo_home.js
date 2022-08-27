/** Express router providing Informasi_Lo_Home related routes
 *
 * @module routers/Informasi_Lo_Home
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
const Informasi_Lo_Home = models.Informasi_Lo_Home;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list Informasi_Lo_Home records
 * @route {GET} /Informasi_Lo_Home/index/{fieldname}/{fieldvalue}
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
			let searchFields = Informasi_Lo_Home.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Informasi_Lo_Home.getOrderBy(req, 'desc');
		query.attributes = Informasi_Lo_Home.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Informasi_Lo_Home.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Informasi_Lo_Home record
 * @route {GET} /Informasi_Lo_Home/view/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/view/:kodeibs'], async (req, res) => {
	try{
		let kodeibs = req.params.kodeibs || null;
		let query = {}
		let where = {}
		where['kode_AO'] = kodeibs;
		query.raw = true;
		query.where = where;
		query.order = Informasi_Lo_Home.getOrderBy(req, 'desc');
		query.attributes = Informasi_Lo_Home.viewFields();
		let record = await Informasi_Lo_Home.findOne(query);
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
 * Route to insert Informasi_Lo_Home record
 * @route {POST} /Informasi_Lo_Home/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('kode_ao').optional({nullable: true, checkFalsy: true}),
		body('nama_ao').optional({nullable: true, checkFalsy: true}),
		body('kyd').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('npl_nom').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('pencairan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('bunga_total').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('bunga_accrue').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('bunga_cash').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('kode_cabang').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cabang').optional({nullable: true, checkFalsy: true}),
		body('id_bpr').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('bpr').optional({nullable: true, checkFalsy: true}),
		body('tanggal').optional({nullable: true, checkFalsy: true}),
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
		
		//save Informasi_Lo_Home record
		let record = await Informasi_Lo_Home.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Informasi_Lo_Home record for edit
 * @route {GET} /Informasi_Lo_Home/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/edit/:kodeibs', async (req, res) => {
	try{
		let kodeibs = req.params.kodeibs;
		let query = {};
		let where = {};
		where['kode_AO'] = kodeibs;
		query.raw = true;
		query.where = where;
		query.attributes = Informasi_Lo_Home.editFields();
		let record = await Informasi_Lo_Home.findOne(query);
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
 * Route to update  Informasi_Lo_Home record
 * @route {POST} /Informasi_Lo_Home/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('kode_ao').optional({nullable: true, checkFalsy: true}),
		body('nama_ao').optional({nullable: true, checkFalsy: true}),
		body('kyd').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('npl_nom').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('pencairan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('bunga_total').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('bunga_accrue').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('bunga_cash').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('kode_cabang').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cabang').optional({nullable: true, checkFalsy: true}),
		body('id_bpr').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('bpr').optional({nullable: true, checkFalsy: true}),
		body('tanggal').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Informasi_Lo_Home.editFields();
		let record = await Informasi_Lo_Home.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Informasi_Lo_Home.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Informasi_Lo_Home record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /Informasi_Lo_Home/delete/{recid}
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
		let records = await Informasi_Lo_Home.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Informasi_Lo_Home.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
