/** Express router providing Nasabah_Informasitambahan related routes
 *
 * @module routers/Nasabah_Informasitambahan
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
const Nasabah_Informasitambahan = models.Nasabah_Informasitambahan;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list nasabah_informasitambahan records
 * @route {GET} /nasabah_informasitambahan/index/{fieldname}/{fieldvalue}
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
			let searchFields = Nasabah_Informasitambahan.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Nasabah_Informasitambahan.getOrderBy(req, 'desc');
		query.attributes = Nasabah_Informasitambahan.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Nasabah_Informasitambahan.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Nasabah_Informasitambahan record
 * @route {GET} /nasabah_informasitambahan/view/{recid}
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
		query.attributes = Nasabah_Informasitambahan.viewFields();
		let record = await Nasabah_Informasitambahan.findOne(query);
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
 * Route to insert Nasabah_Informasitambahan record
 * @route {POST} /nasabah_informasitambahan/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('sifatpinjaman').optional({nullable: true, checkFalsy: true}),
		body('sandipenjamin').optional({nullable: true, checkFalsy: true}),
		body('persenpenjamin').optional({nullable: true, checkFalsy: true}),
		body('sumberpelunasan').optional({nullable: true, checkFalsy: true}),
		body('sektorekonomi').optional({nullable: true, checkFalsy: true}),
		body('jenispenggunaan').optional({nullable: true, checkFalsy: true}),
		body('golongandebitur').optional({nullable: true, checkFalsy: true}),
		body('hubungandebiturdgbank').optional({nullable: true, checkFalsy: true}),
		body('kodeketerkaitan').optional({nullable: true, checkFalsy: true}),
		body('jenisusaha').optional({nullable: true, checkFalsy: true}),
		body('badanusaha').optional({nullable: true, checkFalsy: true}),
		body('hubunganljk').optional({nullable: true, checkFalsy: true}),
		body('sumberpenghasilan').optional({nullable: true, checkFalsy: true}),
		body('golongandebiturbi').optional({nullable: true, checkFalsy: true}),
		body('jnspenggunaanbi').optional({nullable: true, checkFalsy: true}),
		body('sektorekonomibi').optional({nullable: true, checkFalsy: true}),
		body('jnskreditslik').optional({nullable: true, checkFalsy: true}),
		body('katdebiturslik').optional({nullable: true, checkFalsy: true}),
		body('sifatkreditslik').optional({nullable: true, checkFalsy: true}),
		body('orientasipgnslik').optional({nullable: true, checkFalsy: true}),
		body('kabkotapenggunaslik').optional({nullable: true, checkFalsy: true}),
		body('provalmtnas').optional({nullable: true, checkFalsy: true}),
		body('bidangusahabi').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Nasabah_Informasitambahan record
		let record = await Nasabah_Informasitambahan.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Nasabah_Informasitambahan record for edit
 * @route {GET} /nasabah_informasitambahan/edit/{recid}
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
		query.attributes = Nasabah_Informasitambahan.editFields();
		let record = await Nasabah_Informasitambahan.findOne(query);
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
 * Route to update  Nasabah_Informasitambahan record
 * @route {POST} /nasabah_informasitambahan/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('sifatpinjaman').optional({nullable: true, checkFalsy: true}),
		body('sandipenjamin').optional({nullable: true, checkFalsy: true}),
		body('persenpenjamin').optional({nullable: true, checkFalsy: true}),
		body('sumberpelunasan').optional({nullable: true, checkFalsy: true}),
		body('sektorekonomi').optional({nullable: true, checkFalsy: true}),
		body('jenispenggunaan').optional({nullable: true, checkFalsy: true}),
		body('golongandebitur').optional({nullable: true, checkFalsy: true}),
		body('hubungandebiturdgbank').optional({nullable: true, checkFalsy: true}),
		body('kodeketerkaitan').optional({nullable: true, checkFalsy: true}),
		body('jenisusaha').optional({nullable: true, checkFalsy: true}),
		body('badanusaha').optional({nullable: true, checkFalsy: true}),
		body('hubunganljk').optional({nullable: true, checkFalsy: true}),
		body('sumberpenghasilan').optional({nullable: true, checkFalsy: true}),
		body('golongandebiturbi').optional({nullable: true, checkFalsy: true}),
		body('jnspenggunaanbi').optional({nullable: true, checkFalsy: true}),
		body('sektorekonomibi').optional({nullable: true, checkFalsy: true}),
		body('jnskreditslik').optional({nullable: true, checkFalsy: true}),
		body('katdebiturslik').optional({nullable: true, checkFalsy: true}),
		body('sifatkreditslik').optional({nullable: true, checkFalsy: true}),
		body('orientasipgnslik').optional({nullable: true, checkFalsy: true}),
		body('kabkotapenggunaslik').optional({nullable: true, checkFalsy: true}),
		body('provalmtnas').optional({nullable: true, checkFalsy: true}),
		body('bidangusahabi').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Nasabah_Informasitambahan.editFields();
		let record = await Nasabah_Informasitambahan.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Nasabah_Informasitambahan.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Nasabah_Informasitambahan record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /nasabah_informasitambahan/delete/{recid}
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
		let records = await Nasabah_Informasitambahan.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Nasabah_Informasitambahan.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
