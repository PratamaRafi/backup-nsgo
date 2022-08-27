/** Express router providing Pengajuan_Historyhapus related routes
 *
 * @module routers/Pengajuan_Historyhapus
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
const Pengajuan_Historyhapus = models.Pengajuan_Historyhapus;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list pengajuan_historyhapus records
 * @route {GET} /pengajuan_historyhapus/index/{fieldname}/{fieldvalue}
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
			let searchFields = Pengajuan_Historyhapus.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Pengajuan_Historyhapus.getOrderBy(req, 'desc');
		query.attributes = Pengajuan_Historyhapus.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Pengajuan_Historyhapus.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Pengajuan_Historyhapus record
 * @route {GET} /pengajuan_historyhapus/view/{recid}
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
		query.attributes = Pengajuan_Historyhapus.viewFields();
		let record = await Pengajuan_Historyhapus.findOne(query);
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
 * Route to insert Pengajuan_Historyhapus record
 * @route {POST} /pengajuan_historyhapus/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idkar_penghapus').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmkarhapus').optional({nullable: true, checkFalsy: true}),
		body('idkar_marketing').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmkar_marketing').optional({nullable: true, checkFalsy: true}),
		body('idnas').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmnas').optional({nullable: true, checkFalsy: true}),
		body('nmproduk').optional({nullable: true, checkFalsy: true}),
		body('plafond').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Pengajuan_Historyhapus record
		let record = await Pengajuan_Historyhapus.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Pengajuan_Historyhapus record for edit
 * @route {GET} /pengajuan_historyhapus/edit/{recid}
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
		query.attributes = Pengajuan_Historyhapus.editFields();
		let record = await Pengajuan_Historyhapus.findOne(query);
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
 * Route to update  Pengajuan_Historyhapus record
 * @route {POST} /pengajuan_historyhapus/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idkar_penghapus').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmkarhapus').optional({nullable: true, checkFalsy: true}),
		body('idkar_marketing').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmkar_marketing').optional({nullable: true, checkFalsy: true}),
		body('idnas').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmnas').optional({nullable: true, checkFalsy: true}),
		body('nmproduk').optional({nullable: true, checkFalsy: true}),
		body('plafond').optional({nullable: true, checkFalsy: true}).isNumeric(),
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
		query.attributes = Pengajuan_Historyhapus.editFields();
		let record = await Pengajuan_Historyhapus.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Pengajuan_Historyhapus.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Pengajuan_Historyhapus record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /pengajuan_historyhapus/delete/{recid}
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
		let records = await Pengajuan_Historyhapus.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Pengajuan_Historyhapus.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
