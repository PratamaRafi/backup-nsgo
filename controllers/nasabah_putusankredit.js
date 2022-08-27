/** Express router providing Nasabah_Putusankredit related routes
 *
 * @module routers/Nasabah_Putusankredit
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
const Nasabah_Putusankredit = models.Nasabah_Putusankredit;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list nasabah_putusankredit records
 * @route {GET} /nasabah_putusankredit/index/{fieldname}/{fieldvalue}
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
			let searchFields = Nasabah_Putusankredit.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Nasabah_Putusankredit.getOrderBy(req, 'desc');
		query.attributes = Nasabah_Putusankredit.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Nasabah_Putusankredit.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Nasabah_Putusankredit record
 * @route {GET} /nasabah_putusankredit/view/{recid}
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
		query.attributes = Nasabah_Putusankredit.viewFields();
		let record = await Nasabah_Putusankredit.findOne(query);
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
 * Route to insert Nasabah_Putusankredit record
 * @route {POST} /nasabah_putusankredit/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idkarpemutus').optional({nullable: true, checkFalsy: true}),
		body('idnas').optional({nullable: true, checkFalsy: true}),
		body('hasilputusan').optional({nullable: true, checkFalsy: true}),
		body('syaratputusan').optional({nullable: true, checkFalsy: true}),
		body('noteputusan').optional({nullable: true, checkFalsy: true}),
		body('tgputusan').optional({nullable: true, checkFalsy: true}),
		body('plafond').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('jangkawaktu').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('angsuranpokok').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('percbunga').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nombunga').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('angsuran_bln').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('percprovisi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nomprovisi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('ijin_prinsip').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('asuransi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idlo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmlo').optional({nullable: true, checkFalsy: true}),
		body('idmb').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmmb').optional({nullable: true, checkFalsy: true}),
		body('idkc').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmkc').optional({nullable: true, checkFalsy: true}),
		body('iddir').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmdir').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Nasabah_Putusankredit record
		let record = await Nasabah_Putusankredit.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Nasabah_Putusankredit record for edit
 * @route {GET} /nasabah_putusankredit/edit/{recid}
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
		query.attributes = Nasabah_Putusankredit.editFields();
		let record = await Nasabah_Putusankredit.findOne(query);
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
 * Route to update  Nasabah_Putusankredit record
 * @route {POST} /nasabah_putusankredit/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_basepengajuan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idkarpemutus').optional({nullable: true, checkFalsy: true}),
		body('idnas').optional({nullable: true, checkFalsy: true}),
		body('hasilputusan').optional({nullable: true, checkFalsy: true}),
		body('syaratputusan').optional({nullable: true, checkFalsy: true}),
		body('noteputusan').optional({nullable: true, checkFalsy: true}),
		body('tgputusan').optional({nullable: true, checkFalsy: true}),
		body('plafond').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('jangkawaktu').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('angsuranpokok').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('percbunga').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nombunga').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('angsuran_bln').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('percprovisi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nomprovisi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('ijin_prinsip').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('asuransi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('idlo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmlo').optional({nullable: true, checkFalsy: true}),
		body('idmb').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmmb').optional({nullable: true, checkFalsy: true}),
		body('idkc').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmkc').optional({nullable: true, checkFalsy: true}),
		body('iddir').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nmdir').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Nasabah_Putusankredit.editFields();
		let record = await Nasabah_Putusankredit.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Nasabah_Putusankredit.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Nasabah_Putusankredit record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /nasabah_putusankredit/delete/{recid}
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
		let records = await Nasabah_Putusankredit.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Nasabah_Putusankredit.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
