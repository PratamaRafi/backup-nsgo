/** Express router providing Nasabah_Datakeuangan related routes
 *
 * @module routers/Nasabah_Datakeuangan
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
const Nasabah_Datakeuangan = models.Nasabah_Datakeuangan;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list nasabah_datakeuangan records
 * @route {GET} /nasabah_datakeuangan/index/{fieldname}/{fieldvalue}
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
			let searchFields = Nasabah_Datakeuangan.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Nasabah_Datakeuangan.getOrderBy(req, 'desc');
		query.attributes = Nasabah_Datakeuangan.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Nasabah_Datakeuangan.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Nasabah_Datakeuangan record
 * @route {GET} /nasabah_datakeuangan/view/{recid}
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
		query.attributes = Nasabah_Datakeuangan.viewFields();
		let record = await Nasabah_Datakeuangan.findOne(query);
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
 * Route to insert Nasabah_Datakeuangan record
 * @route {POST} /nasabah_datakeuangan/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id').not().isEmpty().isNumeric(),
		body('id_nasabah').optional({nullable: true, checkFalsy: true}),
		body('tipe_pekerjaan').optional({nullable: true, checkFalsy: true}),
		body('sektor_usaha').optional({nullable: true, checkFalsy: true}),
		body('bidang_usaha').optional({nullable: true, checkFalsy: true}),
		body('alamat_kerjaan').optional({nullable: true, checkFalsy: true}),
		body('telp_pekerjaan').optional({nullable: true, checkFalsy: true}),
		body('npwp').optional({nullable: true, checkFalsy: true}),
		body('lamakerja').optional({nullable: true, checkFalsy: true}),
		body('omzetperbln').optional({nullable: true, checkFalsy: true}),
		body('keuntungan_perbln').optional({nullable: true, checkFalsy: true}),
		body('omset_penjualan').optional({nullable: true, checkFalsy: true}),
		body('hpp').optional({nullable: true, checkFalsy: true}),
		body('penghasilanainya').optional({nullable: true, checkFalsy: true}),
		body('total_labakotor').optional({nullable: true, checkFalsy: true}),
		body('biaya_rt').optional({nullable: true, checkFalsy: true}),
		body('pajak_retribusi').optional({nullable: true, checkFalsy: true}),
		body('upahrt').optional({nullable: true, checkFalsy: true}),
		body('listriktelpair').optional({nullable: true, checkFalsy: true}),
		body('biayadll').optional({nullable: true, checkFalsy: true}),
		body('total_pengeluaran').optional({nullable: true, checkFalsy: true}),
		body('pendapatan_bersih').not().isEmpty().isNumeric(),
		body('jmlusaha').optional({nullable: true, checkFalsy: true}),
		body('jmlusahadibiayai').optional({nullable: true, checkFalsy: true}),
		body('jns_produk').optional({nullable: true, checkFalsy: true}),
		body('limitplafond').optional({nullable: true, checkFalsy: true}),
		body('jangkawaktu').optional({nullable: true, checkFalsy: true}),
		body('tujuankredit').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Nasabah_Datakeuangan record
		let record = await Nasabah_Datakeuangan.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Nasabah_Datakeuangan record for edit
 * @route {GET} /nasabah_datakeuangan/edit/{recid}
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
		query.attributes = Nasabah_Datakeuangan.editFields();
		let record = await Nasabah_Datakeuangan.findOne(query);
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
 * Route to update  Nasabah_Datakeuangan record
 * @route {POST} /nasabah_datakeuangan/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('id_nasabah').optional({nullable: true, checkFalsy: true}),
		body('tipe_pekerjaan').optional({nullable: true, checkFalsy: true}),
		body('sektor_usaha').optional({nullable: true, checkFalsy: true}),
		body('bidang_usaha').optional({nullable: true, checkFalsy: true}),
		body('alamat_kerjaan').optional({nullable: true, checkFalsy: true}),
		body('telp_pekerjaan').optional({nullable: true, checkFalsy: true}),
		body('npwp').optional({nullable: true, checkFalsy: true}),
		body('lamakerja').optional({nullable: true, checkFalsy: true}),
		body('omzetperbln').optional({nullable: true, checkFalsy: true}),
		body('keuntungan_perbln').optional({nullable: true, checkFalsy: true}),
		body('omset_penjualan').optional({nullable: true, checkFalsy: true}),
		body('hpp').optional({nullable: true, checkFalsy: true}),
		body('penghasilanainya').optional({nullable: true, checkFalsy: true}),
		body('total_labakotor').optional({nullable: true, checkFalsy: true}),
		body('biaya_rt').optional({nullable: true, checkFalsy: true}),
		body('pajak_retribusi').optional({nullable: true, checkFalsy: true}),
		body('upahrt').optional({nullable: true, checkFalsy: true}),
		body('listriktelpair').optional({nullable: true, checkFalsy: true}),
		body('biayadll').optional({nullable: true, checkFalsy: true}),
		body('total_pengeluaran').optional({nullable: true, checkFalsy: true}),
		body('pendapatan_bersih').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('jmlusaha').optional({nullable: true, checkFalsy: true}),
		body('jmlusahadibiayai').optional({nullable: true, checkFalsy: true}),
		body('jns_produk').optional({nullable: true, checkFalsy: true}),
		body('limitplafond').optional({nullable: true, checkFalsy: true}),
		body('jangkawaktu').optional({nullable: true, checkFalsy: true}),
		body('tujuankredit').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Nasabah_Datakeuangan.editFields();
		let record = await Nasabah_Datakeuangan.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Nasabah_Datakeuangan.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Nasabah_Datakeuangan record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /nasabah_datakeuangan/delete/{recid}
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
		let records = await Nasabah_Datakeuangan.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Nasabah_Datakeuangan.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
