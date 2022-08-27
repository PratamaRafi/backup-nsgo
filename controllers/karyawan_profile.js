/** Express router providing Karyawan_Profile related routes
 *
 * @module routers/Karyawan_Profile
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
const Karyawan_Profile = models.Karyawan_Profile;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list karyawan_profile records
 * @route {GET} /karyawan_profile/index/{fieldname}/{fieldvalue}
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
			let searchFields = Karyawan_Profile.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Karyawan_Profile.getOrderBy(req, 'desc');
		query.attributes = Karyawan_Profile.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Karyawan_Profile.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Karyawan_Profile record
 * @route {GET} /karyawan_profile/view/{recid}
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
		query.attributes = Karyawan_Profile.viewFields();
		let record = await Karyawan_Profile.findOne(query);
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
 * Route to insert Karyawan_Profile record
 * @route {POST} /karyawan_profile/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('nm_karyawan').optional({nullable: true, checkFalsy: true}),
		body('id_jabatan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_pt').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('alamat').optional({nullable: true, checkFalsy: true}),
		body('nik').optional({nullable: true, checkFalsy: true}),
		body('id_cabang').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('kode_ibs').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('ttdfilename').not().isEmpty(),
		body('statusaktiv').optional({nullable: true, checkFalsy: true}),
		body('ttdbase64').optional({nullable: true, checkFalsy: true}),
		body('lastupdate').optional({nullable: true, checkFalsy: true}),
		body('foto_profile').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Karyawan_Profile record
		let record = await Karyawan_Profile.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Karyawan_Profile record for edit
 * @route {GET} /karyawan_profile/edit/{recid}
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
		query.attributes = Karyawan_Profile.editFields();
		let record = await Karyawan_Profile.findOne(query);
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
 * Route to update  Karyawan_Profile record
 * @route {POST} /karyawan_profile/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('nm_karyawan').optional({nullable: true, checkFalsy: true}),
		body('id_jabatan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_pt').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('alamat').optional({nullable: true, checkFalsy: true}),
		body('nik').optional({nullable: true, checkFalsy: true}),
		body('id_cabang').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('kode_ibs').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('ttdfilename').optional({nullable: true}).not().isEmpty(),
		body('statusaktiv').optional({nullable: true, checkFalsy: true}),
		body('ttdbase64').optional({nullable: true, checkFalsy: true}),
		body('lastupdate').optional({nullable: true, checkFalsy: true}),
		body('foto_profile').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Karyawan_Profile.editFields();
		let record = await Karyawan_Profile.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Karyawan_Profile.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Karyawan_Profile record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /karyawan_profile/delete/{recid}
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
		let records = await Karyawan_Profile.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Karyawan_Profile.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
