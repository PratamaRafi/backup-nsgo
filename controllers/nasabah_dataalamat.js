/** Express router providing Nasabah_Dataalamat related routes
 *
 * @module routers/Nasabah_Dataalamat
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
const Nasabah_Dataalamat = models.Nasabah_Dataalamat;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list nasabah_dataalamat records
 * @route {GET} /nasabah_dataalamat/index/{fieldname}/{fieldvalue}
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
			let searchFields = Nasabah_Dataalamat.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Nasabah_Dataalamat.getOrderBy(req, 'desc');
		query.attributes = Nasabah_Dataalamat.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Nasabah_Dataalamat.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Nasabah_Dataalamat record
 * @route {GET} /nasabah_dataalamat/view/{recid}
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
		query.attributes = Nasabah_Dataalamat.viewFields();
		let record = await Nasabah_Dataalamat.findOne(query);
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
 * Route to insert Nasabah_Dataalamat record
 * @route {POST} /nasabah_dataalamat/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_nasabah').optional({nullable: true, checkFalsy: true}),
		body('alamat_ktp').optional({nullable: true, checkFalsy: true}),
		body('rt_rw').optional({nullable: true, checkFalsy: true}),
		body('desa_kelurahan').optional({nullable: true, checkFalsy: true}),
		body('kecamatan').optional({nullable: true, checkFalsy: true}),
		body('kabupaten_kota').optional({nullable: true, checkFalsy: true}),
		body('provinsi').optional({nullable: true, checkFalsy: true}),
		body('telp').optional({nullable: true, checkFalsy: true}),
		body('no_hp').optional({nullable: true, checkFalsy: true}),
		body('status_tptinggal').optional({nullable: true, checkFalsy: true}),
		body('lama_tempatirumah').optional({nullable: true, checkFalsy: true}),
		body('alamat_domisili').optional({nullable: true, checkFalsy: true}),
		body('rt_rw_domisili').optional({nullable: true, checkFalsy: true}),
		body('desa_kelurahan_domisili').optional({nullable: true, checkFalsy: true}),
		body('kabupaten_kota_domisili').optional({nullable: true, checkFalsy: true}),
		body('provinsi_domisili').optional({nullable: true, checkFalsy: true}),
		body('longitude').optional({nullable: true, checkFalsy: true}),
		body('kecamatan_domisili').optional({nullable: true, checkFalsy: true}),
		body('latitude').optional({nullable: true, checkFalsy: true}),
		body('kodepos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('kodeposdomisili').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Nasabah_Dataalamat record
		let record = await Nasabah_Dataalamat.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Nasabah_Dataalamat record for edit
 * @route {GET} /nasabah_dataalamat/edit/{recid}
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
		query.attributes = Nasabah_Dataalamat.editFields();
		let record = await Nasabah_Dataalamat.findOne(query);
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
 * Route to update  Nasabah_Dataalamat record
 * @route {POST} /nasabah_dataalamat/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_nasabah').optional({nullable: true, checkFalsy: true}),
		body('alamat_ktp').optional({nullable: true, checkFalsy: true}),
		body('rt_rw').optional({nullable: true, checkFalsy: true}),
		body('desa_kelurahan').optional({nullable: true, checkFalsy: true}),
		body('kecamatan').optional({nullable: true, checkFalsy: true}),
		body('kabupaten_kota').optional({nullable: true, checkFalsy: true}),
		body('provinsi').optional({nullable: true, checkFalsy: true}),
		body('telp').optional({nullable: true, checkFalsy: true}),
		body('no_hp').optional({nullable: true, checkFalsy: true}),
		body('status_tptinggal').optional({nullable: true, checkFalsy: true}),
		body('lama_tempatirumah').optional({nullable: true, checkFalsy: true}),
		body('alamat_domisili').optional({nullable: true, checkFalsy: true}),
		body('rt_rw_domisili').optional({nullable: true, checkFalsy: true}),
		body('desa_kelurahan_domisili').optional({nullable: true, checkFalsy: true}),
		body('kabupaten_kota_domisili').optional({nullable: true, checkFalsy: true}),
		body('provinsi_domisili').optional({nullable: true, checkFalsy: true}),
		body('longitude').optional({nullable: true, checkFalsy: true}),
		body('kecamatan_domisili').optional({nullable: true, checkFalsy: true}),
		body('latitude').optional({nullable: true, checkFalsy: true}),
		body('kodepos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('kodeposdomisili').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Nasabah_Dataalamat.editFields();
		let record = await Nasabah_Dataalamat.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Nasabah_Dataalamat.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Nasabah_Dataalamat record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /nasabah_dataalamat/delete/{recid}
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
		let records = await Nasabah_Dataalamat.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Nasabah_Dataalamat.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
