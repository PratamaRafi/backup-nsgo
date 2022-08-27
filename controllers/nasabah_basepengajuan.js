/** Express router providing Nasabah_Basepengajuan related routes
 *
 * @module routers/Nasabah_Basepengajuan
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
const Nasabah_Basepengajuan = models.Nasabah_Basepengajuan;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list nasabah_basepengajuan records
 * @route {GET} /nasabah_basepengajuan/index/{fieldname}/{fieldvalue}
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
			let searchFields = Nasabah_Basepengajuan.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Nasabah_Basepengajuan.getOrderBy(req, 'desc');
		query.attributes = Nasabah_Basepengajuan.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Nasabah_Basepengajuan.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Nasabah_Basepengajuan record
 * @route {GET} /nasabah_basepengajuan/view/{recid}
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
		query.attributes = Nasabah_Basepengajuan.viewFields();
		let record = await Nasabah_Basepengajuan.findOne(query);
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
 * Route to insert Nasabah_Basepengajuan record
 * @route {POST} /nasabah_basepengajuan/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_pengajuan').optional({nullable: true, checkFalsy: true}),
		body('tg_pengajuan').optional({nullable: true, checkFalsy: true}),
		body('step_proses').optional({nullable: true, checkFalsy: true}),
		body('id_nasabah').optional({nullable: true, checkFalsy: true}),
		body('status_done').optional({nullable: true, checkFalsy: true}),
		body('idkar').optional({nullable: true, checkFalsy: true}),
		body('notepengajuan_lo').optional({nullable: true, checkFalsy: true}),
		body('waktu_dibuat').not().isEmpty(),
		body('jenis_pengajuan').not().isEmpty(),
		body('tipe_pengajuan').not().isEmpty(),
		body('id_flowprocess').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Nasabah_Basepengajuan record
		let record = await Nasabah_Basepengajuan.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Nasabah_Basepengajuan record for edit
 * @route {GET} /nasabah_basepengajuan/edit/{recid}
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
		query.attributes = Nasabah_Basepengajuan.editFields();
		let record = await Nasabah_Basepengajuan.findOne(query);
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
 * Route to update  Nasabah_Basepengajuan record
 * @route {POST} /nasabah_basepengajuan/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_pengajuan').optional({nullable: true, checkFalsy: true}),
		body('tg_pengajuan').optional({nullable: true, checkFalsy: true}),
		body('step_proses').optional({nullable: true, checkFalsy: true}),
		body('id_nasabah').optional({nullable: true, checkFalsy: true}),
		body('status_done').optional({nullable: true, checkFalsy: true}),
		body('idkar').optional({nullable: true, checkFalsy: true}),
		body('notepengajuan_lo').optional({nullable: true, checkFalsy: true}),
		body('waktu_dibuat').optional({nullable: true}).not().isEmpty(),
		body('jenis_pengajuan').optional({nullable: true}).not().isEmpty(),
		body('tipe_pengajuan').optional({nullable: true}).not().isEmpty(),
		body('id_flowprocess').optional({nullable: true, checkFalsy: true}).isNumeric(),
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
		query.attributes = Nasabah_Basepengajuan.editFields();
		let record = await Nasabah_Basepengajuan.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Nasabah_Basepengajuan.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Nasabah_Basepengajuan record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /nasabah_basepengajuan/delete/{recid}
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
		let records = await Nasabah_Basepengajuan.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Nasabah_Basepengajuan.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
