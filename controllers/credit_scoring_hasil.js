/** Express router providing Credit_Scoring_Hasil related routes
 *
 * @module routers/Credit_Scoring_Hasil
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
const Credit_Scoring_Hasil = models.Credit_Scoring_Hasil;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list credit_scoring_hasil records
 * @route {GET} /credit_scoring_hasil/index/{fieldname}/{fieldvalue}
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
			let searchFields = Credit_Scoring_Hasil.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Credit_Scoring_Hasil.getOrderBy(req, 'desc');
		query.attributes = Credit_Scoring_Hasil.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Credit_Scoring_Hasil.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Credit_Scoring_Hasil record
 * @route {GET} /credit_scoring_hasil/view/{recid}
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
		query.attributes = Credit_Scoring_Hasil.viewFields();
		let record = await Credit_Scoring_Hasil.findOne(query);
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
 * Route to insert Credit_Scoring_Hasil record
 * @route {POST} /credit_scoring_hasil/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('scorefinansialrpc').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('subtotalscore_fn').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('skorusia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('skorkepemilikanrmh').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('skorlamamenetap').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('lamaberusaha').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('totalpenilaiankondisi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('subscorepenilaiankondisi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tingkap_kepercayaan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('skor_riwayatdnganbank').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('perilaku_khdupan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('totalkarakter').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('subtotalskorkarakter').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('total_creditrisk_scoring').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Credit_Scoring_Hasil record
		let record = await Credit_Scoring_Hasil.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Credit_Scoring_Hasil record for edit
 * @route {GET} /credit_scoring_hasil/edit/{recid}
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
		query.attributes = Credit_Scoring_Hasil.editFields();
		let record = await Credit_Scoring_Hasil.findOne(query);
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
 * Route to update  Credit_Scoring_Hasil record
 * @route {POST} /credit_scoring_hasil/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('scorefinansialrpc').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('subtotalscore_fn').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('skorusia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('skorkepemilikanrmh').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('skorlamamenetap').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('lamaberusaha').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('totalpenilaiankondisi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('subscorepenilaiankondisi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tingkap_kepercayaan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('skor_riwayatdnganbank').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('perilaku_khdupan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('totalkarakter').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('subtotalskorkarakter').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('total_creditrisk_scoring').optional({nullable: true, checkFalsy: true}).isNumeric(),
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
		query.attributes = Credit_Scoring_Hasil.editFields();
		let record = await Credit_Scoring_Hasil.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Credit_Scoring_Hasil.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Credit_Scoring_Hasil record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /credit_scoring_hasil/delete/{recid}
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
		let records = await Credit_Scoring_Hasil.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Credit_Scoring_Hasil.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
