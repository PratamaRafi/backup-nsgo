/** Express router providing Nasabah_Datapengajuan related routes
 *
 * @module routers/Nasabah_Datapengajuan
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
const Nasabah_Datapengajuan = models.Nasabah_Datapengajuan;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list nasabah_datapengajuan records
 * @route {GET} /nasabah_datapengajuan/index/{fieldname}/{fieldvalue}
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
			let searchFields = Nasabah_Datapengajuan.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Nasabah_Datapengajuan.getOrderBy(req, 'desc');
		query.attributes = Nasabah_Datapengajuan.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Nasabah_Datapengajuan.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Nasabah_Datapengajuan record
 * @route {GET} /nasabah_datapengajuan/view/{recid}
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
		query.attributes = Nasabah_Datapengajuan.viewFields();
		let record = await Nasabah_Datapengajuan.findOne(query);
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
 * Route to insert Nasabah_Datapengajuan record
 * @route {POST} /nasabah_datapengajuan/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_integrasi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_jenisproduk').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('jm_plafond').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_nasabah').optional({nullable: true, checkFalsy: true}),
		body('jangkawaktu').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tujuan_kredit').optional({nullable: true, checkFalsy: true}),
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('bwpk').optional({nullable: true, checkFalsy: true}),
		body('satuan_waktuangsuran').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Nasabah_Datapengajuan record
		let record = await Nasabah_Datapengajuan.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Nasabah_Datapengajuan record for edit
 * @route {GET} /nasabah_datapengajuan/edit/{recid}
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
		query.attributes = Nasabah_Datapengajuan.editFields();
		let record = await Nasabah_Datapengajuan.findOne(query);
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
 * Route to update  Nasabah_Datapengajuan record
 * @route {POST} /nasabah_datapengajuan/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_integrasi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_jenisproduk').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('jm_plafond').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_nasabah').optional({nullable: true, checkFalsy: true}),
		body('jangkawaktu').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tujuan_kredit').optional({nullable: true, checkFalsy: true}),
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('bwpk').optional({nullable: true, checkFalsy: true}),
		body('satuan_waktuangsuran').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Nasabah_Datapengajuan.editFields();
		let record = await Nasabah_Datapengajuan.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Nasabah_Datapengajuan.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Nasabah_Datapengajuan record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /nasabah_datapengajuan/delete/{recid}
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
		let records = await Nasabah_Datapengajuan.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Nasabah_Datapengajuan.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
