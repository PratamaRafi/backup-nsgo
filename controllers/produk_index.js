/** Express router providing Produk_Index related routes
 *
 * @module routers/Produk_Index
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
const Produk_Index = models.Produk_Index;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list produk_index records
 * @route {GET} /produk_index/index/{fieldname}/{fieldvalue}
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
			let searchFields = Produk_Index.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Produk_Index.getOrderBy(req, 'desc');
		query.attributes = Produk_Index.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Produk_Index.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Produk_Index record
 * @route {GET} /produk_index/view/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		let recid = req.params.recid || null;
		let query = {}
		let where = {}
		where['id_produk'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Produk_Index.viewFields();
		let record = await Produk_Index.findOne(query);
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
 * Route to insert Produk_Index record
 * @route {POST} /produk_index/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_produk').not().isEmpty().isNumeric(),
		body('nm_produk').optional({nullable: true, checkFalsy: true}),
		body('jenis_produk').optional({nullable: true, checkFalsy: true}),
		body('desc_produk').optional({nullable: true, checkFalsy: true}),
		body('ket_manfaat').optional({nullable: true, checkFalsy: true}),
		body('ket_biaya').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Produk_Index record
		let record = await Produk_Index.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id_produk'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Produk_Index record for edit
 * @route {GET} /produk_index/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		let recid = req.params.recid;
		let query = {};
		let where = {};
		where['id_produk'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Produk_Index.editFields();
		let record = await Produk_Index.findOne(query);
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
 * Route to update  Produk_Index record
 * @route {POST} /produk_index/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_produk').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('nm_produk').optional({nullable: true, checkFalsy: true}),
		body('jenis_produk').optional({nullable: true, checkFalsy: true}),
		body('desc_produk').optional({nullable: true, checkFalsy: true}),
		body('ket_manfaat').optional({nullable: true, checkFalsy: true}),
		body('ket_biaya').optional({nullable: true, checkFalsy: true}),
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
		where['id_produk'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Produk_Index.editFields();
		let record = await Produk_Index.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Produk_Index.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Produk_Index record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /produk_index/delete/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		let recid = req.params.recid || '';
		recid = recid.split(',');
		let query = {};
		let where = {};
		where['id_produk'] = recid;
		query.raw = true;
		query.where = where;
		let records = await Produk_Index.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Produk_Index.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
