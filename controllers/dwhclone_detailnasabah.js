/** Express router providing Dwhclone_Detailnasabah related routes
 *
 * @module routers/Dwhclone_Detailnasabah
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
const Dwhclone_Detailnasabah = models.Dwhclone_Detailnasabah;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list dwhclone_detailnasabah records
 * @route {GET} /dwhclone_detailnasabah/index/{fieldname}/{fieldvalue}
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
			let searchFields = Dwhclone_Detailnasabah.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Dwhclone_Detailnasabah.getOrderBy(req, 'desc');
		query.attributes = Dwhclone_Detailnasabah.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Dwhclone_Detailnasabah.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Dwhclone_Detailnasabah record
 * @route {GET} /dwhclone_detailnasabah/view/{recid}
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
		query.attributes = Dwhclone_Detailnasabah.viewFields();
		let record = await Dwhclone_Detailnasabah.findOne(query);
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
 * Route to insert Dwhclone_Detailnasabah record
 * @route {POST} /dwhclone_detailnasabah/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('nasabah_id').optional({nullable: true, checkFalsy: true}),
		body('nama_nasabah').optional({nullable: true, checkFalsy: true}),
		body('nama_ibu_kandung').optional({nullable: true, checkFalsy: true}),
		body('alamat').optional({nullable: true, checkFalsy: true}),
		body('jenis_kelamin').optional({nullable: true, checkFalsy: true}),
		body('tempat_lahir').optional({nullable: true, checkFalsy: true}),
		body('tgl_lahir').optional({nullable: true, checkFalsy: true}),
		body('no_id').optional({nullable: true, checkFalsy: true}),
		body('hp').optional({nullable: true, checkFalsy: true}),
		body('tgl_register').optional({nullable: true, checkFalsy: true}),
		body('nama_suami_istri').optional({nullable: true, checkFalsy: true}),
		body('tg_lahirsuami_istri').optional({nullable: true, checkFalsy: true}),
		body('kabupaten_lahir').optional({nullable: true, checkFalsy: true}),
		body('noktp_pasangan').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Dwhclone_Detailnasabah record
		let record = await Dwhclone_Detailnasabah.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Dwhclone_Detailnasabah record for edit
 * @route {GET} /dwhclone_detailnasabah/edit/{recid}
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
		query.attributes = Dwhclone_Detailnasabah.editFields();
		let record = await Dwhclone_Detailnasabah.findOne(query);
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
 * Route to update  Dwhclone_Detailnasabah record
 * @route {POST} /dwhclone_detailnasabah/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('nasabah_id').optional({nullable: true, checkFalsy: true}),
		body('nama_nasabah').optional({nullable: true, checkFalsy: true}),
		body('nama_ibu_kandung').optional({nullable: true, checkFalsy: true}),
		body('alamat').optional({nullable: true, checkFalsy: true}),
		body('jenis_kelamin').optional({nullable: true, checkFalsy: true}),
		body('tempat_lahir').optional({nullable: true, checkFalsy: true}),
		body('tgl_lahir').optional({nullable: true, checkFalsy: true}),
		body('no_id').optional({nullable: true, checkFalsy: true}),
		body('hp').optional({nullable: true, checkFalsy: true}),
		body('tgl_register').optional({nullable: true, checkFalsy: true}),
		body('nama_suami_istri').optional({nullable: true, checkFalsy: true}),
		body('tg_lahirsuami_istri').optional({nullable: true, checkFalsy: true}),
		body('kabupaten_lahir').optional({nullable: true, checkFalsy: true}),
		body('noktp_pasangan').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Dwhclone_Detailnasabah.editFields();
		let record = await Dwhclone_Detailnasabah.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Dwhclone_Detailnasabah.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Dwhclone_Detailnasabah record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /dwhclone_detailnasabah/delete/{recid}
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
		let records = await Dwhclone_Detailnasabah.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Dwhclone_Detailnasabah.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
