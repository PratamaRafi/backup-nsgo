/** Express router providing Karyawan_Submenubar_Inner related routes
 *
 * @module routers/Karyawan_Submenubar_Inner
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
const Karyawan_Submenubar_Inner = models.Karyawan_Submenubar_Inner;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list karyawan_submenubar_inner records
 * @route {GET} /karyawan_submenubar_inner/index/{fieldname}/{fieldvalue}
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
			let searchFields = Karyawan_Submenubar_Inner.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Karyawan_Submenubar_Inner.getOrderBy(req, 'desc');
		query.attributes = Karyawan_Submenubar_Inner.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Karyawan_Submenubar_Inner.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Karyawan_Submenubar_Inner record
 * @route {GET} /karyawan_submenubar_inner/view/{recid}
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
		query.attributes = Karyawan_Submenubar_Inner.viewFields();
		let record = await Karyawan_Submenubar_Inner.findOne(query);
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
 * Route to insert Karyawan_Submenubar_Inner record
 * @route {POST} /karyawan_submenubar_inner/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('descproduk').optional({nullable: true, checkFalsy: true}),
		body('idproduk').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idlevel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('daftarmenus').optional({nullable: true, checkFalsy: true}),
		body('ijinprinsip').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('urutan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmmenu').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Karyawan_Submenubar_Inner record
		let record = await Karyawan_Submenubar_Inner.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Karyawan_Submenubar_Inner record for edit
 * @route {GET} /karyawan_submenubar_inner/edit/{recid}
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
		query.attributes = Karyawan_Submenubar_Inner.editFields();
		let record = await Karyawan_Submenubar_Inner.findOne(query);
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
 * Route to update  Karyawan_Submenubar_Inner record
 * @route {POST} /karyawan_submenubar_inner/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('descproduk').optional({nullable: true, checkFalsy: true}),
		body('idproduk').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idlevel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('daftarmenus').optional({nullable: true, checkFalsy: true}),
		body('ijinprinsip').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('urutan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmmenu').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Karyawan_Submenubar_Inner.editFields();
		let record = await Karyawan_Submenubar_Inner.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Karyawan_Submenubar_Inner.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Karyawan_Submenubar_Inner record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /karyawan_submenubar_inner/delete/{recid}
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
		let records = await Karyawan_Submenubar_Inner.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Karyawan_Submenubar_Inner.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
