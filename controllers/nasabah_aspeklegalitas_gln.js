/** Express router providing Nasabah_Aspeklegalitas_Gln related routes
 *
 * @module routers/Nasabah_Aspeklegalitas_Gln
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
const Nasabah_Aspeklegalitas_Gln = models.Nasabah_Aspeklegalitas_Gln;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list nasabah_aspeklegalitas_gln records
 * @route {GET} /nasabah_aspeklegalitas_gln/index/{fieldname}/{fieldvalue}
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
			let searchFields = Nasabah_Aspeklegalitas_Gln.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Nasabah_Aspeklegalitas_Gln.getOrderBy(req, 'desc');
		query.attributes = Nasabah_Aspeklegalitas_Gln.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Nasabah_Aspeklegalitas_Gln.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Nasabah_Aspeklegalitas_Gln record
 * @route {GET} /nasabah_aspeklegalitas_gln/view/{recid}
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
		query.attributes = Nasabah_Aspeklegalitas_Gln.viewFields();
		let record = await Nasabah_Aspeklegalitas_Gln.findOne(query);
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
 * Route to insert Nasabah_Aspeklegalitas_Gln record
 * @route {POST} /nasabah_aspeklegalitas_gln/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('jenisusaha').optional({nullable: true, checkFalsy: true}),
		body('alamatusaha').optional({nullable: true, checkFalsy: true}),
		body('status_tempatusaha').optional({nullable: true, checkFalsy: true}),
		body('lamausaha').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('periode_penghasilan').optional({nullable: true, checkFalsy: true}),
		body('ratarata_penghasilan_bln').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('komoditilainya').optional({nullable: true, checkFalsy: true}),
		body('lamausahalainya').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('periodepengasilanlainya').optional({nullable: true, checkFalsy: true}),
		body('rataratapenghasilanlainya').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idprov').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idkotakab').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Nasabah_Aspeklegalitas_Gln record
		let record = await Nasabah_Aspeklegalitas_Gln.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Nasabah_Aspeklegalitas_Gln record for edit
 * @route {GET} /nasabah_aspeklegalitas_gln/edit/{recid}
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
		query.attributes = Nasabah_Aspeklegalitas_Gln.editFields();
		let record = await Nasabah_Aspeklegalitas_Gln.findOne(query);
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
 * Route to update  Nasabah_Aspeklegalitas_Gln record
 * @route {POST} /nasabah_aspeklegalitas_gln/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('jenisusaha').optional({nullable: true, checkFalsy: true}),
		body('alamatusaha').optional({nullable: true, checkFalsy: true}),
		body('status_tempatusaha').optional({nullable: true, checkFalsy: true}),
		body('lamausaha').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('periode_penghasilan').optional({nullable: true, checkFalsy: true}),
		body('ratarata_penghasilan_bln').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('komoditilainya').optional({nullable: true, checkFalsy: true}),
		body('lamausahalainya').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('periodepengasilanlainya').optional({nullable: true, checkFalsy: true}),
		body('rataratapenghasilanlainya').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idprov').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idkotakab').optional({nullable: true, checkFalsy: true}).isNumeric(),
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
		query.attributes = Nasabah_Aspeklegalitas_Gln.editFields();
		let record = await Nasabah_Aspeklegalitas_Gln.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Nasabah_Aspeklegalitas_Gln.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Nasabah_Aspeklegalitas_Gln record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /nasabah_aspeklegalitas_gln/delete/{recid}
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
		let records = await Nasabah_Aspeklegalitas_Gln.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Nasabah_Aspeklegalitas_Gln.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
